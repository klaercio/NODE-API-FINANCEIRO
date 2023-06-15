import despesas from "../model/Despesas.js";

class DespesasController {
    static getDespesas = async (req, res) => {
        try {
            const despesasResultado = await despesas.find().populate('idUsuario');
            res.status(200).json(despesasResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static postDespesas = async (req, res) => {
        const despesa = new despesas(req.body);
        try {
            await despesa.save();
            res.status(200).send(despesa.toJSON());
        }catch(err) {
            res.status(500).send(`${err} - Erro na criação da despesa`);
        }
    }

    static deleteDespesas = async (req, res) => {
        const {id} = req.params;

        try {
            await despesas.findByIdAndDelete(id);
            res.status(201).send("Despensa exlcuída com sucesso");
        }catch(err) {
            res.status(400).send(`${err} - Erro na exclusão do usuário`);
        }
    }
}

export default DespesasController;