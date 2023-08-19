import { Component, OnInit } from '@angular/core';
import { Radionica } from '../modeli/radionica';
import { KorisniciService } from '../servisi/korisnici.service';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-admin-radionice',
  templateUrl: './admin-radionice.component.html',
  styleUrls: ['./admin-radionice.component.css']
})
export class AdminRadioniceComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, private korisniciServis: KorisniciService) { }

  radionice: Radionica[] = []
  azuriranje: boolean[] = []
  indeksi: number[] = []

  slika: File

  zahtevi: Radionica[] = []

  ngOnInit(): void {
    this.radionice = []
    this.azuriranje = []
    this.indeksi = []
    
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      if (radionice) {
        let i = 0
        for (let radionica of radionice) {
          radionica.datum = new Date(radionica.datum)

          if (new Date(radionica.datum) > new Date()) {
            this.radionice.push(radionica)
            this.azuriranje.push(false)
            this.indeksi.push(i)
            i++
          }
        }
      }
    })

    this.radioniceServis.dohvatiZahteve().subscribe((z: Radionica[])=>{
      if (z)
        this.zahtevi = z
    })
  }

  azuriraj(i) {
    this.azuriranje[i] = !this.azuriranje[i]
  }

  potvrdi(r: Radionica, i) {
    if (this.slika) {
      r.slika = this.slika.name
    }
    this.radioniceServis.azuriraj(r).subscribe(()=>{
      if (this.slika)
        this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{})
      this.azuriranje[i] = !this.azuriranje[i]
    })
  }

  obrisi(r: Radionica) {
    this.radioniceServis.obrisi(r.id).subscribe(()=>{
      this.ngOnInit()
    })
  }

  obradiZahtev(id, status) {
    this.radioniceServis.obradiZahtev(id, status).subscribe(()=>{
      this.ngOnInit()
    })
  }

  menuItems = [
    { title: 'Profil', link: '/adminProfil' },
    { title: 'Korisnici', link: '/adminKorisnici' },
    { title: 'Radionice', link: '/adminRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];


  postaviSliku(e){
    this.slika=e.target.files[0];
  }



}
