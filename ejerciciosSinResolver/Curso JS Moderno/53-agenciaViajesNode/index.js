/* Comando para correr la aplicacion en la consola:  npm run dev */

//const express = require('express');
import express from "express";
import router from "./routes/index.js";

const app = express();

//Definimos puerto
const port = process.env.PORT || 4000;

//req: petición, res: respuesta
app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

// Agregar router
//app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
