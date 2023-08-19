import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Prijava = new Schema({
    id_rad: {
        type: Number
    },
    kor_ime_uces: {
        type: String
    }
})

export default mongoose.model('Prijava', Prijava, 'prijave')