import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { Radionica } from '../modeli/radionica';
import { RadioniceService } from '../servisi/radionice.service'

@Component({
  selector: 'app-organizator-profil',
  templateUrl: './organizator-profil.component.html',
  styleUrls: ['./organizator-profil.component.css']
})
export class OrganizatorProfilComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, private ruter: Router) { }

  organizator: Korisnik;
  mojeRadionice: Radionica[] = []

  ngOnInit(): void {
    this.mojeRadionice = []
    this.organizator = JSON.parse(localStorage.getItem('korisnik'))

    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      for(let radionica of radionice)
        if (radionica.kor_ime_org == this.organizator.kor_ime)
          this.mojeRadionice.push(radionica)
    })
  }

  vidiPoruke(radionica: Radionica) {
    localStorage.setItem('radionica', JSON.stringify(radionica));
    this.ruter.navigate(['organizatorPoruke'])
  }

  menuItems = [
    { title: 'Profil', link: '/organizatorProfil' },
    { title: 'Radionice', link: '/organizatorRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];

}
