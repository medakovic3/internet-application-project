import express from 'express'
import { CaskanjaKontroler } from '../kontroleri/caskanjaKontroler'

const caskanjaRuter = express.Router()

caskanjaRuter.route('/dohvPoUcesniku').post(
    (req, res)=>new CaskanjaKontroler().dohvPoUcesniku(req, res)
)

caskanjaRuter.route('/dohvPoRadioniciIUcesniku').post(
    (req, res)=>new CaskanjaKontroler().dohvPoRadioniciIUcesniku(req, res)
)

caskanjaRuter.route('/dohvPoRadionici').post(
    (req, res)=>new CaskanjaKontroler().dohvPoRadionici(req, res)
)

caskanjaRuter.route('/upisiPoruku').post(
    (req, res)=>new CaskanjaKontroler().upisiPoruku(req, res)
)

caskanjaRuter.route('/upisiPorukuOrg').post(
    (req, res)=>new CaskanjaKontroler().upisiPorukuOrg(req, res)
)

export default caskanjaRuter