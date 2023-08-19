import { Component, OnInit } from '@angular/core';
import { Caskanje } from '../modeli/caskanje';
import { Korisnik } from '../modeli/korisnik';
import { Radionica } from '../modeli/radionica';
import { CaskanjaService } from '../servisi/caskanja.service';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-ucesnik-profil',
  templateUrl: './ucesnik-profil.component.html',
  styleUrls: ['./ucesnik-profil.component.css']
})
export class UcesnikProfilComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, private caskanjaServis: CaskanjaService) { }

  korisnik: Korisnik;
  poseceneRadionice: Radionica[] = []
  mojaCaskanja: Caskanje[] = []
  id_rad: number
  prijavljeneRadionice: Radionica[] = []

  ngOnInit(): void {
    this.poseceneRadionice = []
    this.prijavljeneRadionice = []
    this.korisnik = JSON.parse(localStorage.getItem('korisnik'));

    
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      //Postavljanje datuma
      for (const radionica of radionice)
        radionica.datum = new Date(radionica.datum)

      // Posecene radionice
      for (const id of this.korisnik.posecene_radionice) {
        for (const radionica of radionice) {
          if (id.id_rad == radionica.id) {
            this.poseceneRadionice.push(radionica);
            break;
          }
        }
      }
      //Prijavljene radionice
      for (const id of this.korisnik.prijavljene_radionice) {
        for (const radionica of radionice) {
          if (id.id_rad == radionica.id) {
            if (radionica.datum < new Date()) {
              this.poseceneRadionice.push(radionica)
              break;
            }
          }
        }
      }
    })

    // Moja caskanja
    this.caskanjaServis.dohvPoUcesniku(this.korisnik.kor_ime).subscribe((caskanja: Caskanje[])=>{
      this.mojaCaskanja = caskanja
    })
  }

  sortirajPoDatumu() {
    this.poseceneRadionice = this.poseceneRadionice.sort((rad1, rad2)=>{
      if (rad1.datum < rad2.datum)
        return -1
      else if (rad1.datum == rad2.datum)
        return 0
      else 
        return 1
    })
  }

  sortirajPoMestu() {
    this.poseceneRadionice = this.poseceneRadionice.sort((rad1, rad2)=>{
      if (rad1.mesto < rad2.mesto)
        return -1
      else if (rad1.mesto == rad2.mesto)
        return 0
      else 
        return 1
    })
  }

  sortirajPoNazivu() {
    this.poseceneRadionice = this.poseceneRadionice.sort((rad1, rad2)=>{
      if (rad1.naziv > rad2.naziv)
        return -1
      else if (rad1.naziv == rad2.naziv)
        return 0
      else 
        return 1
    })
  }


  menuItems = [
    { title: 'Profil', link: '/ucesnikProfil' },
    { title: 'Radionice', link: '/ucesnikRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];
}
