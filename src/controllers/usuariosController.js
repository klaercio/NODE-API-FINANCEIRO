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

    static postUsuarios = async (req, res) => {
        const usuario = new usuarios(req.body)
        try {
            await usuario.save();
            res.status(200).send(usuario.toJSON());
        }catch(err) {
            res.status(500).send(`${err} - Erro na criação do usuário`)
        }
    }
    static
}

export default UsuariosController;