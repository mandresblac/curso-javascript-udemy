import express from "express";

const router = express.Router();

//Metodo get de HTTP
// req = request o "peticion, solicitud", res = response o "respuesta"
router.get("/", (req, res) => {
  res.render("../views/inicio.pug", {
    pagina: "Inicio",
  });
});

router.get("/nosotros", (req, res) => {
  res.render("../views/nosotros.pug", {
    pagina: "Nosotros",
  });
});

router.get("/viajes", (req, res) => {
  res.render("../views/viajes.pug", {
    pagina: "Viajes",
  });
});

router.get("/testimoniales", (req, res) => {
  res.render("../views/testimoniales.pug", {
    pagina: "Testimoniales",
  });
});

export default router;
