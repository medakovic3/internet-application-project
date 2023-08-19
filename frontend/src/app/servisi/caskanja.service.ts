import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaskanjaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvPoUcesniku(kor_ime_uces){
    const podaci = {
      kor_ime_uces: kor_ime_uces
    }

    return this.http.post(`${this.uri}/caskanja/dohvPoUcesniku`, podaci)
  }

  dohvPoRadionici(id_rad){
    const podaci = {
      id_rad: id_rad
    }

    return this.http.post(`${this.uri}/caskanja/dohvPoRadionici`, podaci)
  }

  dohvPoRadioniciIUcesniku(id_rad, kor_ime_uces){
    const podaci = {
      id_rad: id_rad,
      kor_ime_uces: kor_ime_uces
    }

    return this.http.post(`${this.uri}/caskanja/dohvPoRadioniciIUcesniku`, podaci)
  }

  upisiPoruku(id_rad, kor_ime_uces, tekstPoruke, kor_ime_org, naziv_rad, vreme_poruke){
    const podaci = {
      id_rad: id_rad,
      kor_ime_uces: kor_ime_uces, 
      tekstPoruke: tekstPoruke,
      kor_ime_org: kor_ime_org,
      naziv_rad: naziv_rad,
      vreme_poruke: vreme_poruke
    }

    return this.http.post(`${this.uri}/caskanja/upisiPoruku`, podaci)
  }

  upisiPorukuOrg(kor_ime_org, kor_ime_uces, poruka){
    const podaci = {
      kor_ime_org: kor_ime_org,
      kor_ime_uces: kor_ime_uces,
      poruka: poruka
    }

    return this.http.post(`${this.uri}/caskanja/upisiPorukuOrg`, podaci)
  }
}
