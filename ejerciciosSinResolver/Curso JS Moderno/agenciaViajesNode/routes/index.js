import express from 'express';

const router = express.Router();

//Metodo get de HTTP
// req = request o "peticion, solicitud", res = response o "respuesta"
router.get("/", (req, res) => {
    res.send("Inicio");
});

router.get("/nosotros", (req, res) => {
    res.send("Nosotros");
});

router.get("/contacto", (req, res) => {
    res.send("Contacto");
});

export default router;
