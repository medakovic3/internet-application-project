import express from 'express'
import { RadioniceKontroler } from '../kontroleri/radioniceKontroler'

const radioniceRuter = express.Router()

radioniceRuter.route('/dohvatiSve').get(
    (req, res)=>new RadioniceKontroler().dohvatiSve(req, res)
)

radioniceRuter.route('/dohvatiZahteve').get(
    (req, res)=>new RadioniceKontroler().dohvatiZahteve(req, res)
)

radioniceRuter.route('/azuriraj').post(
    (req, res)=>new RadioniceKontroler().azuriraj(req, res)
)

radioniceRuter.route('/dodaj').post(
    (req, res)=>new RadioniceKontroler().dodaj(req, res)
)

radioniceRuter.route('/obrisi').post(
    (req, res)=>new RadioniceKontroler().obrisi(req, res)
)

radioniceRuter.route('/obradiZahtev').post(
    (req, res)=>new RadioniceKontroler().obradiZahtev(req, res)
)

export default radioniceRuter