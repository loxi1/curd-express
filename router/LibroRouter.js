const express = require("express")
const Libro = require("../models/Libro")
const LibroRoute = express.Router()

LibroRoute.post("/libro", async (req, res)=> {
    try {
        const {titulo, descripcion, autorId} = req.body
        if(!titulo || !descripcion || !autorId)
        {
            return res.status(400).send({
                success: true,
                message: "Completar datos"
            })
        }
        let libro = new Libro({
            titulo, descripcion, autor: autorId
        })
        await libro.save()

        return res.status(200).send({
            success: true,
            message: "Registro Ok"
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

LibroRoute.get("/verlibro/:id", async (req, res) => {
    try {
        const {id} = req.params
        let libro = await Libro.findById(id).populate({path:"autor", select:"name, surname, age"})
        if(!libro)
        {
            return res.status(400).send({
                success: false,
                message: "Libro no encontrado"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Ok",
            data: libro
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

module.exports = LibroRoute