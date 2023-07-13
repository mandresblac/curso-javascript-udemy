import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
} from "../controllers/paginasController.js";

const router = express.Router();

//Metodo get de HTTP
// req = request o "peticion, solicitud", res = response o "respuesta"
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/testimoniales", paginaTestimoniales);

export default router;
