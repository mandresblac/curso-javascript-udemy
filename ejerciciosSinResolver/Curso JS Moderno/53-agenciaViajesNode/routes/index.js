import express from "express";

const router = express.Router();

//Metodo get de HTTP
// req = request o "peticion, solicitud", res = response o "respuesta"
router.get("/", (req, res) => {
  res.render("../views/inicio.pug");
});

router.get("/nosotros", (req, res) => {
  const viajes = "Cambiando el texto";

  res.render("../views/nosotros.pug", {
    viajes,
  });
});

export default router;
