import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrijaveService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajPrijavu(id_rad, kor_ime_uces) {
    const podaci = {
      id_rad: id_rad,
      kor_ime_uces: kor_ime_uces
    }

    return this.http.post(`${this.uri}/prijave/dodajPrijavu`, podaci)
  }

  dohvati(id_rad, kor_ime_uces) {
    const podaci = {
      id_rad: id_rad,
      kor_ime_uces: kor_ime_uces
    }

    return this.http.post(`${this.uri}/prijave/dohvati`, podaci)
  }

  dohvatiSve() {
    return this.http.get(`${this.uri}/prijave/dohvatiSve`)
  }

  obrisi(id_rad, kor_ime_uces) {
    const podaci = {
      id_rad: id_rad,
      kor_ime_uces: kor_ime_uces
    }

    return this.http.post(`${this.uri}/prijave/obrisi`, podaci)
  }
}
