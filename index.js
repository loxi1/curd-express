const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const AutorRouter = require("./router/AutorRouter")
const LibroRoute = require("./router/LibroRouter")

app.use(express.json({ extended: true }));
app.use(express.urlencoded());

// Enrrutado
app.use("/api", AutorRouter)
app.use("/api", LibroRoute)
//Conexion DB
const URL = process.env.MONGO_DB
mongoose
.connect(URL, {})
.then(() => {
    console.log("Se conecto a la DB");
})
.catch((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log("Servidor escucha el puerto 5000")
});