import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdRadionice } from '../modeli/idRadionice';
import { Korisnik } from '../modeli/korisnik';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisniciServis : KorisniciService, private ruter : Router) { }

  ngOnInit(): void {
  }

  ime: string
  prezime: string
  kor_ime: string
  lozinka1: string
  lozinka2: string
  telefon: string
  mejl: string
  tip: boolean = false
  org_naziv: string = ""
  org_adresa: string = ""
  org_maticni: number = -1
  slika: File
  posecene_radionice: Array<IdRadionice> = []
  prijavljene_radionice: Array<IdRadionice> = []
  status: number = 0
  poruka: string

  registracija() {
    const proveraLozinke = new RegExp(/^((^([A-Z])|(^[a-z])(?=.*[A-Z]))(?=.*\d)(?=.*[@$!%*#?&\.])).{3,11}$/)
    const proveraMatBroja = new RegExp(/^\d{8}$/);

    if (!proveraLozinke.test(this.lozinka1.toString())) {
      this.poruka = "Lozinka mora da pocinje slovom, sadrzi 4-12 karaktera od cega bar jedan broj, bar jedno veliko slovo i bar jedan specijalni karakter"
      return
    }

    if (this.org_maticni != -1)
      if (!proveraMatBroja.test(this.org_maticni.toString())) {
        this.poruka = "Maticni broj mora da sadrzi tacno 8 karatkera"
        return
      }

    if (this.lozinka1 != this.lozinka2) {
      this.poruka = "Unete lozinke nisu iste"
      return
    }

    let nazivSlike: string = (this.slika ? this.slika.name : "default.png")

    this.korisniciServis.dohvKorisnikaPoKorImenu(this.kor_ime).subscribe((korisnik: Korisnik)=>{

      if (korisnik) {
        this.poruka = "Nalog sa ovim korisnickim imenom vec postoji"
        return
      }

      this.korisniciServis.dohvKorisnikaPoMejlu(this.mejl).subscribe((korisnik: Korisnik)=>{
        
        if (korisnik) {
          this.poruka = "Nalog sa ovom mejl adresom vec postoji"
          return
        }

        this.korisniciServis.registracija(this.ime, this.prezime, this.kor_ime, this.lozinka1, this.telefon, this.mejl, this.tip, 
          this.org_naziv, this.org_adresa, this.org_maticni, nazivSlike,
          this.posecene_radionice, this.prijavljene_radionice, this.status).subscribe(()=>{

            if (this.slika)
              this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{})
              
            this.ruter.navigate(['prijava'])
          })

      })
    })
  }

  postaviSliku(e){
    this.slika=e.target.files[0];
  }

  menuItems = [
    { title: 'Prijava', link: '/prijava' },
    { title: 'Registracija', link: '/registracija' },
    { title: 'Radionice', link: '/neregistrovanRadionice' }
  ];

}
