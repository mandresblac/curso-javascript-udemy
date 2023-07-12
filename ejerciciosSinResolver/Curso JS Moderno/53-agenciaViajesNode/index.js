/* Comando para correr la aplicacion en la consola:  npm run dev */

//const express = require('express'); // Sintaxis de commonjs
import express from "express";
import router from "./routes/index.js";

const app = express();

//Definimos puerto
const port = process.env.PORT || 4000; // "process.env.PORT" es una variable de entorno

// Habilitar la dependencia PUG
app.set("View engine", "pug"); // "View engine" es soportado por express

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  next();
});

// Definir la carpeta public
app.use(express.static("public"));

// Agregar router
app.use("/", router); // "use" es un metodo que abarca los siguientes metodos HTPP: get, post, put, patch y delete

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
