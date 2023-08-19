import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { Radionica } from '../modeli/radionica';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-ucesnik-radionice',
  templateUrl: './ucesnik-radionice.component.html',
  styleUrls: ['./ucesnik-radionice.component.css']
})
export class UcesnikRadioniceComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, private ruter: Router) { }

  korisnik: Korisnik
  prijavljeneRadionice: Radionica[] = []
  aktuelneRadionice: Radionica[] = []
  danas = new Date()

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('korisnik'));

    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      //Postavljanje datuma
      for (const radionica of radionice)
        radionica.datum = new Date(radionica.datum)
      // Prijavljene radionice
      for (const id of this.korisnik.prijavljene_radionice) 
        for (const radionica of radionice) 
          if (id.id_rad == radionica.id) {
            this.prijavljeneRadionice.push(radionica);
            break; 
          }
      // Aktuelne radionice
      for (const radionica of radionice) {
        if (radionica.datum > this.danas) {
          this.aktuelneRadionice.push(radionica)
        }
      }
    })
  }

  detalji(id_rad) {
    let r: Radionica
    for (const radionica of this.aktuelneRadionice)
      if (radionica.id == id_rad) {
        r = radionica
        break;
      }

    localStorage.setItem('radionica', JSON.stringify(r));
    this.ruter.navigate(['detaljiRadionice'])
  }

  menuItems = [
    { title: 'Profil', link: '/ucesnikProfil' },
    { title: 'Radionice', link: '/ucesnikRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];
}
