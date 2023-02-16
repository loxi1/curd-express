const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        requiered: true
    },
});

module.exports = mongoose.model("Autor", AutorSchema);