import express from 'express' 
import Caskanje from '../modeli/caskanje'

export class CaskanjaKontroler {
    dohvPoUcesniku = (req: express.Request, res: express.Response)=>{
        let kor_ime_uces = req.body.kor_ime_uces

        Caskanje.find({'kor_ime_uces': kor_ime_uces}, (greska, caskanja)=>{
            if (greska) console.log(greska)
            else res.json(caskanja)
        })
    }

    dohvPoRadioniciIUcesniku = (req: express.Request, res: express.Response)=>{
        let id_rad = req.body.id_rad
        let kor_ime_uces = req.body.kor_ime_uces

        Caskanje.findOne({'id_rad': id_rad ,'kor_ime_uces': kor_ime_uces}, (greska, caskanje)=>{
            if (greska) console.log(greska)
            else res.json(caskanje)
        })
    }

    dohvPoRadionici = (req: express.Request, res: express.Response)=>{
        let id_rad = req.body.id_rad

        Caskanje.find({'id_rad': id_rad}, (greska, caskanja)=>{
            if (greska) console.log(greska)
            else res.json(caskanja)
        })
    }

    upisiPoruku = (req: express.Request, res: express.Response)=>{
        let id_rad = req.body.id_rad
        let kor_ime_uces = req.body.kor_ime_uces
        let tekstPoruke = req.body.tekstPoruke
        let kor_ime_org = req.body.kor_ime_org
        let naziv_rad = req.body.naziv_rad
        let vreme_poruke = req.body.vreme_poruke

        let poruka = {
            kor_ime: kor_ime_uces,
            tekst: tekstPoruke,
            vreme_poruke: vreme_poruke
        }

        Caskanje.findOne({'id_rad': id_rad ,'kor_ime_uces': kor_ime_uces}, (greska, caskanje)=>{

            if (greska) console.log(greska)
            else if (caskanje) {

                Caskanje.updateOne({'id_rad': id_rad ,'kor_ime_uces': kor_ime_uces}, {$push: {'poruke': poruka}}, (greska, odgovor)=>{
                    if(greska) console.log(greska)
                    else {
                        res.json({'message': 'ok'})
                    }
                })
            }
            else {
                let poruke = [poruka]
                let caskanje = new Caskanje({
                    kor_ime_org: kor_ime_org,
                    kor_ime_uces: kor_ime_uces,
                    id_rad: id_rad,
                    naziv_rad: naziv_rad,
                    poruke: poruke
                })

                caskanje.save((greska, odgovor)=>{
                    if(greska) {
                        console.log(greska);
                        res.status(400).json({"message": "error"})
                    }
                    else res.json({"message": "ok"})
                })
            }
        })        
    }

    upisiPorukuOrg = (req: express.Request, res: express.Response)=>{
        let kor_ime_org = req.body.kor_ime_org
        let kor_ime_uces = req.body.kor_ime_uces
        let poruka = req.body.poruka

        Caskanje.updateOne({'kor_ime_org': kor_ime_org ,'kor_ime_uces': kor_ime_uces}, {$push: {'poruke': poruka}}, (greska, odgovor)=>{
            if(greska) console.log(greska)
            else {
                res.json({'message': 'ok'})
            }
        })
    }
}