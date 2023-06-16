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

    static getDespesasById = async (req, res) => {
        const {id} =  req.params;

        try {
            const despesasResultado = await despesas.findById(id);
            res.status(200).send(despesasResultado.toJSON());
        }catch(err) {
            res.status(500).send({message: `${err} - Erro na busca pela despesa`})
        }
    }

    static getDespesasByIdUsuario = async (req, res) => {
        const idUsuario = req.query.idUsuario;
        
        try {
            const despesasResultado = await despesas.find({"idUsuario": idUsuario}).populate('idUsuario');
            res.status(200).json(despesasResultado);
        }catch(err) {
            res.status(500).send({message: `${err} - Erro na busca pela despesa`})
        }
    }

    static postDespesas = async (req, res) => {
        const despesa = new despesas(req.body);
        try {
            await despesa.save();
            res.status(201).send(despesa.toJSON());
        }catch(err) {
            res.status(500).send(`${err} - Erro na criação da despesa`);
        }
    }

    static putDespesas = async (req, res) => {
        const {id} = req.params;

        try {
            await despesas.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: `${id} - Editado com sucesso!`})
        } catch(err) {
            res.status(500).send({message: `${err} - Erro na edição da despesa`})
        }
    }

    static deleteDespesas = async (req, res) => {
        const {id} = req.params;

        try {
            await despesas.findByIdAndDelete(id);
            res.status(200).send("Despesa exlcuída com sucesso");
        }catch(err) {
            res.status(400).send(`${err} - Erro na exclusão do usuário`);
        }
    }
}

export default DespesasController;