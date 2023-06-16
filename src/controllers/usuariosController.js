import usuarios from "../model/usuario.js";

class UsuariosController {
    static getUsuarios = async (req, res) => {
        try {
            const usuariosResultado = await usuarios.find();         
            res.status(200).json(usuariosResultado);
        }catch(err) {
            res.static(500).json(err)
        }
    }

    static getUsuariosById = async (req, res) => {
        const {id} =  req.params;

        try {
            const usuariosResultado = await usuarios.findById(id);
            res.status(200).send(usuariosResultado.toJSON());
        }catch(err) {
            res.status(500).send({message: 'Erro na busca pelo usuário'})
        }
    }

    static postUsuarios = async (req, res) => {
        const usuario = new usuarios(req.body)
        
        try {
            await usuario.save();
            res.status(201).send(usuario.toJSON());
        }catch(err) {
            res.status(500).send(`${err} - Erro na criação do usuário`)
        }
    }

    static putUsuarios = async (req, res) => {
        const {id} = req.params;

        try {
            await usuarios.findByIdAndUpdate(id, {$set: req.body});
            console.log(usuarios[id]);
            res.status(200).send({message: `${id} - Editado com sucesso!`})
        } catch(err) {
            res.status(500).send({message: `${err} - Erro na edição do usuário`})
        }
    }

    static deleteUsuarios = async (req, res) => {
        const {id} = req.params;
        
        try { 
            await usuarios.findByIdAndDelete(id);
            res.status(200).send(`${id} - Usuário excluído com sucesso!!!`)
        }catch(err) {
            res.status(400).send(`${err} - Id Inválido`);
        }
    }
}

export default UsuariosController;