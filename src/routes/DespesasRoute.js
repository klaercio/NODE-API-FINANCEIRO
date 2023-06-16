import express from "express";
import despesasController from '../controllers/despesasController.js';

const DespesasRoutes = express.Router();

DespesasRoutes
    .get("/despesas", despesasController.getDespesas)
    .get("/despesas/:id", despesasController.getDespesasById)
    .post("/despesas", despesasController.postDespesas)
    .put("/despesas/:id", despesasController.putDespesas)
    .delete("/despesas/:id", despesasController.deleteDespesas)

export default DespesasRoutes;