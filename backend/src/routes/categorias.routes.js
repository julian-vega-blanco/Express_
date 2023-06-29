import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategories);
router.get("/:id", categoriaController.getCategoria);
router.delete("/:id", categoriaController.deleteCategoria);
router.put("/:id", categoriaController.updateCategories);
export default router;