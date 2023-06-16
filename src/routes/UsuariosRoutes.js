import express from "express";
import usuariosController from '../controllers/usuariosController.js';
import DespesasController from "../controllers/despesasController.js";

const UsuariosRoutes = express.Router();

UsuariosRoutes
    .get("/usuarios", usuariosController.getUsuarios)
    .get("/usuarios/:id", usuariosController.getUsuariosById)
    .post("/usuarios", usuariosController.postUsuarios)
    .put("/usuarios/:id", usuariosController.putUsuarios)
    .delete("/usuarios/:id", usuariosController.deleteUsuarios)

export default UsuariosRoutes;