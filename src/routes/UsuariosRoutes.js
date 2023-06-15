import express from "express";
import usuariosController from '../controllers/usuariosController.js';

const UsuariosRoutes = express.Router();

UsuariosRoutes
    .get("/usuarios", usuariosController.getUsuarios)
    .post("/usuarios", usuariosController.postUsuarios)

export default UsuariosRoutes;