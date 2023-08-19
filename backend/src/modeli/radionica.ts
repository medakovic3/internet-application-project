import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Radionica = new Schema({
    slika : {
        type: String
    },
    naziv : {
        type: String
    },
    datum : {
        type: Date
    },
    mesto : {
        type: String
    },
    kratak_opis : {
        type: String
    },
    dug_opis : {
        type: String
    },
    kor_ime_org : {
        type: String
    },
    naziv_org : {
        type: String
    },
    galerija : {
        type: Array
    },
    id : {
        type: Number
    },
    status : {
        type: Number
    }
})

export default mongoose.model('Radionica', Radionica, 'radionice')