import despesas from "../model/Despesas.js";

class DespesasController {
    static getDespesas = async (req, res) => {
        try {
            const despesasResultado = await despesas.find();
            res.status(200).json(despesasResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default DespesasController;