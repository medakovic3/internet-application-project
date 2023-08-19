import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { Prijava } from '../modeli/prijava';
import { Radionica } from '../modeli/radionica';
import { KorisniciService } from '../servisi/korisnici.service';
import { PrijaveService } from '../servisi/prijave.service';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-organizator-radionice',
  templateUrl: './organizator-radionice.component.html',
  styleUrls: ['./organizator-radionice.component.css']
})
export class OrganizatorRadioniceComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, 
              private prijaveServis: PrijaveService,
              private korisniciServis: KorisniciService,
              private ruter: Router) { }

  aktuelneRadionice: Radionica[] = []
  mojeRadionice: Radionica[] = []
  danas: Date = new Date()
  organizator: Korisnik
  prijave: Prijava[] = []
  sablonRadionica: Radionica
  id_rad: number

  naziv: string
  mesto: string
  datum: Date
  kratak_opis: string
  dug_opis: string
  naziv_slike: string
  nazivi_slika_galerija: string[] = []
  slika: File
  galerija: File[] = []
  novi_id_rad: number = 0

  ngOnInit(): void {
    this.novi_id_rad = 0
    this.aktuelneRadionice = []
    this.mojeRadionice = []
    this.organizator = JSON.parse(localStorage.getItem('korisnik'))
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{

      if (radionice) {

        for (let radionica of radionice) {

          if (radionica.id > this.novi_id_rad)
            this.novi_id_rad = radionica.id

          radionica.datum = new Date(radionica.datum)

          if (radionica.datum > this.danas)
            this.aktuelneRadionice.push(radionica)
        }
      }

      this.novi_id_rad++;

      for (let radionica of radionice)
        if (radionica.kor_ime_org == this.organizator.kor_ime)
          this.mojeRadionice.push(radionica)
    })

    this.dohvatiSvePrijave()
  }

  dohvatiSvePrijave() {
    this.prijaveServis.dohvatiSve().subscribe((prijave: Prijava[])=>{
      if (prijave)
        this.prijave = prijave
    })
  }

  obrisiPrijavu(id_rad: number, kor_ime_uces: string){
    this.prijaveServis.obrisi(id_rad, kor_ime_uces).subscribe(()=>{
      this.ngOnInit()
    })
  }

  prihvatiPrijavu(id_rad: number, kor_ime_uces: string) {
    this.korisniciServis.prihvatanjePrijave(kor_ime_uces, id_rad).subscribe(()=>{})

    this.obrisiPrijavu(id_rad, kor_ime_uces)
  }

  uredi(radionica: Radionica){
    localStorage.setItem('radionica', JSON.stringify(radionica))
    this.ruter.navigate(['organizatorUredjivanje'])
  }

  izaberiSablon() {
    for (let r of this.mojeRadionice)
      if (r.id == this.id_rad) {
        this.sablonRadionica = r
        break
      }

    this.naziv = this.sablonRadionica.naziv
    this.mesto = this.sablonRadionica.mesto
    this.datum = new Date(this.sablonRadionica.datum)
    this.kratak_opis = this.sablonRadionica.kratak_opis
    this.dug_opis = this.sablonRadionica.dug_opis
    this.naziv_slike = this.sablonRadionica.slika
  }

  dodaj(){
    let radionica: Radionica

    if (this.slika) this.naziv_slike = this.slika.name
    else if (this.sablonRadionica) this.naziv_slike = this.sablonRadionica.slika
    else this.naziv_slike = "radionica.jpg"

    radionica = {
      slika: this.naziv_slike,
      naziv: this.naziv,
      datum: this.datum,
      mesto: this.mesto,
      kratak_opis: this.kratak_opis,
      dug_opis: this.dug_opis,
      kor_ime_org: this.organizator.kor_ime,
      naziv_org: this.organizator.org_naziv,
      galerija: this.nazivi_slika_galerija,
      id: this.novi_id_rad,
      status: 0
    }

    this.radioniceServis.dodaj(radionica).subscribe(()=>{
      if(this.slika) {
        this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{

        })
      }

      for (let slika of this.galerija)
        this.korisniciServis.postaviSliku(slika).subscribe(()=>{

        })
    })
  }

  postaviSliku(e){
    this.slika=e.target.files[0];
  }

  postaviSlike(e){
    const odabraneSlike = e.target.files;
    for (let i = 0; i < odabraneSlike.length; i++) {
      this.galerija.push(odabraneSlike[i])
      this.nazivi_slika_galerija.push(odabraneSlike[i].name)
    }
  }


  menuItems = [
    { title: 'Profil', link: '/organizatorProfil' },
    { title: 'Radionice', link: '/organizatorRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];

}
