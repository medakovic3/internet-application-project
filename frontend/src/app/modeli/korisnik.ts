import { IdRadionice } from "./idRadionice"

export class Korisnik {
    ime: string
    prezime: string
    kor_ime: string
    lozinka: string
    telefon: string
    mejl: string
    tip: number
    org_naziv: string
    org_adresa: string
    org_maticni: number
    slika: string
    posecene_radionice: Array<IdRadionice>
    prijavljene_radionice: Array<IdRadionice>
    status: number
}