import express from 'express'
import { KorisniciKontroler } from '../kontroleri/korisniciKontroler'

const korisniciRuter = express.Router()

korisniciRuter.route('/prijava').post(
    (req, res)=>new KorisniciKontroler().prijava(req, res)
)

korisniciRuter.route('/registracija').post(
    (req, res)=>new KorisniciKontroler().registracija(req, res)
)

korisniciRuter.route('/dohvKorisnikaPoKorImenu').post(
    (req, res)=>new KorisniciKontroler().dohvKorisnikaPoKorImenu(req, res)
)

korisniciRuter.route('/dohvKorisnikaPoMejlu').post(
    (req, res)=>new KorisniciKontroler().dohvKorisnikaPoMejlu(req, res)
)

korisniciRuter.route('/promenaLozinke').post(
    (req, res)=>new KorisniciKontroler().promenaLozinke(req, res)
)

korisniciRuter.route('/prihvatanjePrijave').post(
    (req, res)=>new KorisniciKontroler().prihvatanjePrijave(req, res)
)

korisniciRuter.route('/dohvatiSve').get(
    (req, res)=>new KorisniciKontroler().dohvatiSve(req, res)
)

korisniciRuter.route('/azuriraj').post(
    (req, res)=>new KorisniciKontroler().azuriraj(req, res)
)

korisniciRuter.route('/dohvatiZahteve').get(
    (req, res)=>new KorisniciKontroler().dohvatiZahteve(req, res)
)

korisniciRuter.route('/obradiZahtev').post(
    (req, res)=>new KorisniciKontroler().obradiZahtev(req, res)
)

korisniciRuter.route('/obrisi').post(
    (req, res)=>new KorisniciKontroler().obrisi(req, res)
)

export default korisniciRuter