const mongoose = require("mongoose")

const LibroSchema = new mongoose.Schema({
    titulo: {
        type:String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Types.ObjectId,
        ref: "Autor"
    }
})

module.exports = mongoose.model("Libro", LibroSchema)