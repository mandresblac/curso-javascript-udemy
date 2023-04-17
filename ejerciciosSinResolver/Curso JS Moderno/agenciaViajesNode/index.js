/* Comando para correr la aplicacion en la conosola:  npm run dev */

//const express = require('express');
import express from 'express';
import router from './routes/index.js';

const app = express();

//Definimos puerto
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
