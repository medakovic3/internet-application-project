import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private korisniciServis: KorisniciService, private ruter: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string
  lozinka: string
  nova_lozinka: string
  poruka: string

  promenaLozinke() {
    this.korisniciServis.dohvKorisnikaPoKorImenu(this.kor_ime).subscribe((korisnik: Korisnik)=>{
      if (!korisnik) {
        this.poruka = "Uneli ste nepostojeće korisničko ime"
        return
      }
      if (this.lozinka != korisnik.lozinka) {
        this.poruka = "Neispravna lozinka"
        return
      }
      const proveraLozinke = new RegExp(/^((^([A-Z])|(^[a-z])(?=.*[A-Z]))(?=.*\d)(?=.*[@$!%*#?&\.])).{3,11}$/)
      if (!proveraLozinke.test(this.nova_lozinka.toString())) {
        this.poruka = "Lozinka mora da pocinje slovom, sadrzi 4-12 karaktera od cega bar jedan broj, bar jedno veliko slovo i bar jedan specijalni karakter"
        return
      }
      this.korisniciServis.promenaLozinke(this.kor_ime, this.nova_lozinka).subscribe(()=>{
        localStorage.clear()
        this.ruter.navigate(['prijava'])
      })
    })
  }

  povratak() {
    window.history.back()
  }
}
