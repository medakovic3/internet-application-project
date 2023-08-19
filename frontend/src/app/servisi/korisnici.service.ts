import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../modeli/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  prijava(kor_ime, lozinka) {
    const podaci = {
      kor_ime: kor_ime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/prijava`, podaci)
  }

  registracija(ime, prezime, kor_ime, lozinka, telefon, mejl, tip, org_naziv, org_adresa, org_maticni, slika,
              posecene_radionice, prijavljene_radionice, status) 
    {
      const podaci = {
        ime: ime,
        prezime: prezime,
        kor_ime: kor_ime,
        lozinka: lozinka,
        telefon: telefon,
        mejl: mejl,
        tip: tip,
        org_naziv: org_naziv,
        org_adresa: org_adresa,
        org_maticni: org_maticni,
        slika: slika,
        posecene_radionice: posecene_radionice,
        prijavljene_radionice: prijavljene_radionice,
        status: status
      }

      return this.http.post(`${this.uri}/korisnici/registracija`, podaci)
    }

    dohvKorisnikaPoKorImenu(kor_ime) {
      const podaci = {
        kor_ime: kor_ime
      }

      return this.http.post(`${this.uri}/korisnici/dohvKorisnikaPoKorImenu`, podaci)
    }

    dohvKorisnikaPoMejlu(mejl) {
      const podaci = {
        mejl: mejl
      }

      return this.http.post(`${this.uri}/korisnici/dohvKorisnikaPoMejlu`, podaci)
    }

    postaviSliku(slika){
      let data=new FormData();
      data.append('slika',slika);
      return this.http.post(`${this.uri}/postaviSliku`, data)
    }

    promenaLozinke(kor_ime, lozinka) {
      const podaci = {
        kor_ime: kor_ime,
        lozinka: lozinka
      }
  
      return this.http.post(`${this.uri}/korisnici/promenaLozinke`, podaci)
    }

    prihvatanjePrijave(kor_ime, id_rad) {
      const podaci = {
        kor_ime: kor_ime,
        id_rad: id_rad
      }
  
      return this.http.post(`${this.uri}/korisnici/prihvatanjePrijave`, podaci)
    }

    dohvatiSve() {
      return this.http.get(`${this.uri}/korisnici/dohvatiSve`)
    }

    azuriraj(korisnik: Korisnik) {

      return this.http.post(`${this.uri}/korisnici/azuriraj`, korisnik)
    }

    dohvatiZahteve() {
      return this.http.get(`${this.uri}/korisnici/dohvatiZahteve`)
    }

    obradiZahtev(kor_ime, status) {
      const podaci = {
        kor_ime: kor_ime,
        status: status
      }

      return this.http.post(`${this.uri}/korisnici/obradiZahtev`, podaci)
    }

    obrisi(kor_ime) {
      const podaci = {
        kor_ime: kor_ime
      }

      return this.http.post(`${this.uri}/korisnici/obrisi`, podaci)
    }
}
