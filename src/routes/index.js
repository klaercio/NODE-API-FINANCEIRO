import express from "express";
import usuarios from "./UsuariosRoutes.js";
import despesas from "./DespesasRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send('API FINANCEIRA');
    });

    app.use(
        express.json(),
        usuarios,
        despesas
    );
}

export default routes;