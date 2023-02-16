const express = require("express");
const Autor = require("../models/Autor");
const AutorRouter = express.Router();

AutorRouter.get("/", async (req, res)=>{
    let autores = await Autor.find({})
    return res.status(200).send({
        success: true,
        autores,
    })
})

AutorRouter.post("/autor", async (req, res) => {
    try {
        const {name, surname, age} = req.body;
        if(!name || !surname || !age) {
            return res.status(400).send({
                success: false,
                message: "Falta completar"
            });
        }

        let autor = new Autor({
            name,
            surname,
            age
        });

        await autor.save()

        return res.status(200).send({
            success: true,
            message: "Autor Correcto",
            data: autor
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

AutorRouter.delete("/eliminar/:id", async (req, res)=> {
    try {
        const {id} = req.params
        await Autor.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Autor eliminado"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

AutorRouter.put("/actualizar/:id", async (req, res)=> {
    try {
        const {id} = req.params
        const {age} = req.body

        await Autor.findByIdAndUpdate(id, {age})
        return res.status(200).send({
            success: true,
            message: "Actualizo OK"
        })        
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

module.exports = AutorRouter;