import { Router } from "express";
import { nuevaVentaControllers } from "../controllers/ventas.controllers.js";

const router = Router();

router.post('/ventas', nuevaVentaControllers);

export default router;