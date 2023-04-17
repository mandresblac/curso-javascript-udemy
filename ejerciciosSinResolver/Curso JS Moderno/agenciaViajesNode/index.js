/* Comando para correr la aplicacion en la conosola:  npm run dev */

//const express = require('express');
import express from 'express';

const app = express();

//Definimos puerto
const port = process.env.PORT || 4000;

//Metodo get de HTTP
// req = request o "peticion, solicitud", res = response o "respuesta"
app.get("/", (req, res) => {
    res.send("Inicio");
});

app.get("/nosotros", (req, res) => {
    res.send("Nosotros");
});

app.get("/contacto", (req, res) => {
    res.send("Contacto");
});

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
