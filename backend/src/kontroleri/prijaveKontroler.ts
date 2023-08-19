import express from 'express'
import Prijava from '../modeli/prijava'

export class PrijaveKontroler {
    dodajPrijavu = (req: express.Request, res: express.Response)=>{
        let prijava = new Prijava(req.body)

        prijava.save((greska, odgovor)=>{
            if(greska) console.log(greska)
            else res.json({"poruka": "Prijava podneta"})
        })
    }

    dohvati = (req: express.Request, res: express.Response)=>{
        let id_rad = req.body.id_rad
        let kor_ime_uces = req.body.kor_ime_uces

        Prijava.findOne({'id_rad': id_rad, 'kor_ime_uces': kor_ime_uces}, (greska, prijava)=>{
            if (greska) console.log(greska)
            else res.json(prijava)
        })
    }

    dohvatiSve = (req: express.Request, res: express.Response)=>{

        Prijava.find({}, (greska, prijave)=>{
            if (greska) console.log(greska)
            else res.json(prijave)
        })
    }

    obrisi = (req: express.Request, res: express.Response)=>{
        let id_rad = req.body.id_rad
        let kor_ime_uces = req.body.kor_ime_uces

        Prijava.deleteOne({'id_rad': id_rad, 'kor_ime_uces': kor_ime_uces}, (greska, prijava)=>{
            if(greska) console.log(greska)
            else res.json({"poruka": "Prijava prihvaćena"})
        })
    }
}