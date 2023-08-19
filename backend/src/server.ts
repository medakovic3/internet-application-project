import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import korisniciRuter from './rute/korisniciRute'
import radioniceRuter from './rute/radioniceRute'
import caskanjaRuter from './rute/caskanjaRute'
import prijaveRuter from './rute/prijaveRute'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/pia_radionice_db")
const konekcija = mongoose.connection
konekcija.once('open',()=>{
    console.log('Uspesna konekcija')
});

const ruter = express.Router()
ruter.use('/korisnici', korisniciRuter)
ruter.use('/radionice', radioniceRuter)
ruter.use('/caskanja', caskanjaRuter)
ruter.use('/prijave', prijaveRuter)

//Za sliku
const mul = require('multer');
var bodyParser = require('body-parser')

bodyParser.json()
let st = mul.diskStorage({
    destination: (req, file, callback)=> {
        
      callback(null, '../frontend/src/assets');
    },
    filename: (req, file, callback)=> {
       
      callback(null, file.originalname);
      
    }
  });
let up = mul({ storage: st });

app.post('/postaviSliku',up.single('slika'),(req,res)=>{
    res.send();
})

app.use('/', ruter)
app.listen(4000, () => console.log(`Express server running on port 4000`))