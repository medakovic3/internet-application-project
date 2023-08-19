import { Component, OnInit } from '@angular/core';
import { Caskanje } from '../modeli/caskanje';
import { Korisnik } from '../modeli/korisnik';
import { Prijava } from '../modeli/prijava';
import { Radionica } from '../modeli/radionica';
import { CaskanjaService } from '../servisi/caskanja.service';
import { PrijaveService } from '../servisi/prijave.service';

@Component({
  selector: 'app-detalji-radionice',
  templateUrl: './detalji-radionice.component.html',
  styleUrls: ['./detalji-radionice.component.css']
})
export class DetaljiRadioniceComponent implements OnInit {

  constructor(private prijaveServis: PrijaveService, private caskanjaServis: CaskanjaService) { }

  ngOnInit(): void {
    this.radionica = JSON.parse(localStorage.getItem('radionica'));
    this.korisnik = JSON.parse(localStorage.getItem('korisnik'));
    this.tekstPoruke = ""

    this.caskanjaServis.dohvPoRadioniciIUcesniku(this.radionica.id, this.korisnik.kor_ime).subscribe((caskanje: Caskanje)=>{
      if (caskanje) 
        this.caskanje = caskanje
    })
  }

  radionica: Radionica
  korisnik: Korisnik
  poruka: string
  caskanje: Caskanje
  tekstPoruke: string

  dodajPrijavu() {
    for (const id of this.korisnik.prijavljene_radionice) {
      if (id.id_rad == this.radionica.id) {
        this.poruka = "Već ste prijavili ovu radionicu"
        return;
      }
    }

    this.prijaveServis.dohvati(this.radionica.id, this.korisnik.kor_ime).subscribe((prijava: Prijava)=>{
      if (prijava) {
        this.poruka = "Već ste prijavili ovu radionicu"
        return;
      }
      else {
        this.prijaveServis.dodajPrijavu(this.radionica.id, this.korisnik.kor_ime).subscribe(()=>{
          this.poruka = "Prijava za radionicu podneta"
        })
      }
    })
  }

  upisiPoruku() {
    let vreme_poruke = new Date()
    this.caskanjaServis.upisiPoruku(this.radionica.id, this.korisnik.kor_ime, this.tekstPoruke, this.radionica.kor_ime_org, this.radionica.naziv, vreme_poruke).subscribe(()=>{
      this.ngOnInit()
    })
  }

  menuItems = [
    { title: 'Profil', link: '/ucesnikProfil' },
    { title: 'Radionice', link: '/ucesnikRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];
}
