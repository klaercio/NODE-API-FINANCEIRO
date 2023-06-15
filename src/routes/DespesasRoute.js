import express from "express";
import despesasController from '../controllers/despesasController.js';

const DespesasRoutes = express.Router();

DespesasRoutes
    .get("/despesas", despesasController.getDespesas)
    .post("/despesas", despesasController.postDespesas)
    .delete("/despesa/:id", despesasController.deleteDespesas)

export default DespesasRoutes;