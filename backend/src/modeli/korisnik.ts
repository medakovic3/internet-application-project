import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Korisnik = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    kor_ime: {
        type: String
    },
    lozinka: {
        type: String
    },
    telefon: {
        type: String
    },
    mejl: {
        type: String
    },
    tip: {
        type: Number
    },
    org_naziv: {
        type: String
    },
    org_adresa: {
        type: String
    },
    org_maticni: {
        type: Number
    },
    slika: {
        type: String
    },
    posecene_radionice: {
        type: Array
    },
    prijavljene_radionice: {
        type: Array
    },
    status: {
        type: Number
    }
})

export default mongoose.model('Korisnik', Korisnik, 'korisnici')