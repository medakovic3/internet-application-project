import express from 'express' 
import Korisnik from '../modeli/korisnik'

export class KorisniciKontroler {
    prijava = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime
        let lozinka = req.body.lozinka

        Korisnik.findOne({'kor_ime': kor_ime, 'lozinka': lozinka, 'status': 1}, (greska, korisnik)=>{
            if(greska) console.log(greska)
            else res.json(korisnik)
        })
    }

    registracija = (req: express.Request, res: express.Response)=>{
        let korisnik = new Korisnik(req.body)

        korisnik.save((greska, resp)=>{
            if (greska) {
                console.log(greska)
                res.status(400).json({"poruka": "GRESKA"})
            }
            else res.json({"poruka": "Zahtev za registraciju poslat"})
        })
    }

    dohvKorisnikaPoKorImenu = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime

        Korisnik.findOne({'kor_ime': kor_ime}, (greska, korisnik)=>{
            if(greska) console.log(greska)
            else res.json(korisnik)
        })
    }

    dohvKorisnikaPoMejlu = (req: express.Request, res: express.Response)=>{
        let mejl = req.body.mejl

        Korisnik.findOne({'mejl': mejl}, (greska, korisnik)=>{
            if(greska) console.log(greska)
            else res.json(korisnik)
        })
    }

    promenaLozinke = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime
        let lozinka = req.body.lozinka

        Korisnik.updateOne({'kor_ime': kor_ime}, {$set:{'lozinka': lozinka}}, (greska, odgovor)=>{
            if (greska) console.log(greska)
            else res.json()
        })
    }

    prihvatanjePrijave = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime
        let id_rad = req.body.id_rad

        let obj = {
            id_rad: id_rad
        }

        Korisnik.updateOne({'kor_ime': kor_ime}, {$push:{'prijavljene_radionice': obj}}, (greska, odgovor)=>{
            if (greska) console.log(greska)
            else res.json()
        })
    }

    dohvatiSve = (req: express.Request, res: express.Response)=>{

        Korisnik.find({'status': 1}, (greska, korisnici)=>{
            if (greska) console.log(greska)
            else res.json(korisnici)
        })
    }

    azuriraj = (req: express.Request, res: express.Response)=>{
        let korisnik = new Korisnik(req.body)
        
        Korisnik.deleteOne({'kor_ime': korisnik.kor_ime}, (greska, odg)=>{
            if (greska) console.log(greska)
        })

        korisnik.save((greska, resp)=>{
            if (greska) {
                console.log(greska)
                res.status(400).json({"poruka": "GRESKA"})
            }
            else res.json({"poruka": "Korisnik azuriran"})
        })
    }

    dohvatiZahteve = (req: express.Request, res: express.Response)=>{

        Korisnik.find({'status': 0}, (greska, korisnici)=>{
            if(greska) console.log(greska)
            else res.json(korisnici)
        })
    }

    obradiZahtev = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime
        let status = req.body.status

        Korisnik.updateOne({'kor_ime': kor_ime}, {$set:{'status': status}}, (greska, odgovor)=>{
            if (greska) console.log(greska)
            else res.json()
        })
    }

    obrisi = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime

        Korisnik.deleteOne({'kor_ime': kor_ime}, (greska, odg)=>{
            if (greska) console.log(greska)
            else res.json()
        })
    }
}