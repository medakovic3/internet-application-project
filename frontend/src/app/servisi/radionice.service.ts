import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Radionica } from '../modeli/radionica';

@Injectable({
  providedIn: 'root'
})
export class RadioniceService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiSve() {
    return this.http.get(`${this.uri}/radionice/dohvatiSve`)
  }

  dohvatiZahteve() {
    return this.http.get(`${this.uri}/radionice/dohvatiZahteve`)
  }

  azuriraj(r: Radionica) {
    const podaci = {
      slika: r.slika,
      naziv: r.naziv,
      datum: r.datum,
      mesto: r.mesto,
      kratak_opis: r.kratak_opis,
      dug_opis: r.dug_opis,
      kor_ime_org: r.kor_ime_org,
      naziv_org: r.naziv_org,
      galerija: r.galerija,
      id: r.id,
      status: r.status
    }

    return this.http.post(`${this.uri}/radionice/azuriraj`, podaci)
  }

  dodaj(r: Radionica) {
    const podaci = {
      slika: r.slika,
      naziv: r.naziv,
      datum: r.datum,
      mesto: r.mesto,
      kratak_opis: r.kratak_opis,
      dug_opis: r.dug_opis,
      kor_ime_org: r.kor_ime_org,
      naziv_org: r.naziv_org,
      galerija: r.galerija,
      id: r.id,
      status: r.status
    }

    return this.http.post(`${this.uri}/radionice/dodaj`, podaci)
  }

  obrisi(id) {
    const podaci = {
      id: id
    }

    return this.http.post(`${this.uri}/radionice/obrisi`, podaci)
  }

  obradiZahtev(id, status) {
    const podaci = {
      id: id,
      status: status
    }

    return this.http.post(`${this.uri}/radionice/obradiZahtev`, podaci)
  }

}
