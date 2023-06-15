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

    static
}

export default UsuariosController;