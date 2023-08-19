import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../modeli/korisnik';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-admin-korisnici',
  templateUrl: './admin-korisnici.component.html',
  styleUrls: ['./admin-korisnici.component.css']
})
export class AdminKorisniciComponent implements OnInit {

  constructor(private korisniciServis: KorisniciService) { }
  
  ucesnici: Korisnik[] = []
  azuriranjeUcesnici: boolean[] = []
  indeksiUcesnici: number[] = []

  organizatori: Korisnik[] = []
  azuriranjeOrganizatori: boolean[] = []
  indeksiOrganizatori: number[] = []

  slika: File

  zahtevi: Korisnik[] = []

  ngOnInit(): void {
    this.ucesnici = []
    this.azuriranjeUcesnici = []
    this.indeksiUcesnici = []

    this.organizatori = []
    this.azuriranjeOrganizatori = []
    this.indeksiOrganizatori = []
    
    this.korisniciServis.dohvatiSve().subscribe((korisnici: Korisnik[])=>{
      let u = 0
      let o = 0
      for (let k of korisnici) {
        if (k.tip == 0) {
          this.ucesnici.push(k)
          this.azuriranjeUcesnici.push(false)
          this.indeksiUcesnici.push(u)
          u++
        }
        if (k.tip == 1) {
          this.organizatori.push(k)
          this.azuriranjeOrganizatori.push(false)
          this.indeksiOrganizatori.push(o)
          o++
        }
      }
    })

    this.korisniciServis.dohvatiZahteve().subscribe((zahtevi: Korisnik[])=>{
      if(zahtevi)
        this.zahtevi = zahtevi
    })
  }

  azuriraj(i) {
    this.azuriranjeUcesnici[i] = !this.azuriranjeUcesnici[i]
  }

  azurirajOrganizatori(i) {
    this.azuriranjeOrganizatori[i] = !this.azuriranjeOrganizatori[i]
  }

  potvrdi(k: Korisnik, i) {
    if (this.slika) {
      k.slika = this.slika.name
    }
    this.korisniciServis.azuriraj(k).subscribe(()=>{
      if (this.slika)
        this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{})
      this.azuriranjeUcesnici[i] = !this.azuriranjeUcesnici[i]
    })
  }

  potvrdiOrg(k: Korisnik, i) {
    if (this.slika) {
      k.slika = this.slika.name
    }
    this.korisniciServis.azuriraj(k).subscribe(()=>{
      if (this.slika)
        this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{})
      this.azuriranjeOrganizatori[i] = !this.azuriranjeOrganizatori[i]
    })
  }

  obrisi(k: Korisnik) {
    this.korisniciServis.obrisi(k.kor_ime).subscribe(()=>{
      this.ngOnInit()
    })
  }

  postaviSliku(e){
    this.slika=e.target.files[0];
  }

  menuItems = [
    { title: 'Profil', link: '/adminProfil' },
    { title: 'Korisnici', link: '/adminKorisnici' },
    { title: 'Radionice', link: '/adminRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];

  obradiZahtev(kor_ime, status) {
    this.korisniciServis.obradiZahtev(kor_ime, status).subscribe(()=>{this.ngOnInit()})
  }

}
