import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Caskanje = new Schema({
    kor_ime_org: {
        type: String
    },
    kor_ime_uces: {
        type: String
    },
    id_rad: {
        type: Number
    },
    naziv_rad: {
        type: String
    },
    poruke: {
        type: Array
    }
})

export default mongoose.model('Caskanje', Caskanje, 'caskanja')