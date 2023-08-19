import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { KorisniciService } from '../servisi/korisnici.service';

enum TipKorisnika { 
  Ucesnik     = 0,
  Organizator = 1,
  Admin       = 2
}

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisniciServis: KorisniciService, private ruter: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string
  lozinka: string
  poruka: string

  prijava() {
    this.korisniciServis.prijava(this.kor_ime, this.lozinka).subscribe((korisnik: Korisnik)=>{
      if (korisnik) {
        localStorage.setItem('korisnik', JSON.stringify(korisnik))
        if (korisnik.tip == TipKorisnika.Ucesnik)
          this.ruter.navigate(['ucesnikProfil'])
        else if (korisnik.tip == TipKorisnika.Organizator)
          this.ruter.navigate(['organizatorProfil'])
        else if (korisnik.tip == TipKorisnika.Admin)
          this.ruter.navigate(['adminProfil'])
      }
      else
        this.poruka = "Neispravni podaci, molimo pokusajte ponovo"
    })
  }

  menuItems = [
    { title: 'Prijava', link: '/prijava' },
    { title: 'Registracija', link: '/registracija' },
    { title: 'Radionice', link: '/neregistrovanRadionice' }
  ];

}
