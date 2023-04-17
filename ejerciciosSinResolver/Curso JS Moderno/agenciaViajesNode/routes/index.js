import express from 'express';

const router = express.Router();

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

