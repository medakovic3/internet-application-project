import express from 'express'
import { PrijaveKontroler } from '../kontroleri/prijaveKontroler'

const prijaveRuter = express.Router()

prijaveRuter.route('/dodajPrijavu').post(
    (req, res)=>new PrijaveKontroler().dodajPrijavu(req, res)
)

prijaveRuter.route('/dohvati').post(
    (req, res)=>new PrijaveKontroler().dohvati(req, res)
)

prijaveRuter.route('/dohvatiSve').get(
    (req, res)=>new PrijaveKontroler().dohvatiSve(req, res)
)

prijaveRuter.route('/obrisi').post(
    (req, res)=>new PrijaveKontroler().obrisi(req, res)
)

export default prijaveRuter