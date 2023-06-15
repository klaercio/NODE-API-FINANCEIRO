import express from "express";
import despesasController from '../controllers/despesasController.js';

const DespesasRoutes = express.Router();

DespesasRoutes.get("/despesas", despesasController.getDespesas);

export default DespesasRoutes;