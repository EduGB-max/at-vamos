   
const mongoose = require('mongoose')

const modelo = new mongoose.Schema({
    texto: String,
    enviado: {type: Date, default: Date.now}
})

const texto = mongoose.model('texto', modelo)

module.exports = texto

