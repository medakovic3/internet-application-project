import express from 'express'
import Radionica from '../modeli/radionica'

export class RadioniceKontroler {
    dohvatiSve = (req: express.Request, res: express.Response)=>{
        
        Radionica.find({'status': 1}, (greska, radionice)=>{
            if (greska) console.log(greska)
            else res.json(radionice)
        })
    }

    azuriraj = (req: express.Request, res: express.Response)=>{
        let radionica = new Radionica(req.body)
        let id = req.body.id

        Radionica.deleteOne({'id': id}, (greska, odg)=>{
            if (greska) console.log(greska)
        })

        radionica.save((greska, odgovor)=>{
            if (greska) console.log(greska)
            else res.json({"poruka": "Radionica azurirana"})
        })
    }

    dodaj = (req: express.Request, res: express.Response)=>{
        let radionica = new Radionica(req.body)

        radionica.save((greska, odgovor)=>{
            if (greska) console.log(greska)
            else res.json({"poruka": "Radionica kreirana"})
        })
    }

    obrisi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        Radionica.deleteOne({'id': id}, (greska, odg)=>{
            if (greska) console.log(greska)
            else res.json({"poruka": "Radionica obrisana"})
        })
    }

    dohvatiZahteve = (req: express.Request, res: express.Response)=>{

        Radionica.find({'status': 0}, (greska, radionice)=>{
            if (greska) console.log(greska)
            else res.json(radionice)
        })
    }

    obradiZahtev = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        let status = req.body.status

        Radionica.updateOne({'id': id}, {$set:{'status': status}}, (greska, odg)=>{
            if (greska) console.log(greska)
            else res.json()
        })
    }
}