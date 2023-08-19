import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../modeli/korisnik';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {

  constructor() { }

  korisnik: Korisnik

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('korisnik'));
  }

  menuItems = [
    { title: 'Profil', link: '/adminProfil' },
    { title: 'Korisnici', link: '/adminKorisnici' },
    { title: 'Radionice', link: '/adminRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];
}
