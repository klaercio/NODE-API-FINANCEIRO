import mongoose, { Schema, mongo } from "mongoose";

const UsuarioSchemma = new mongoose.Schema( {
    id: {type: String},
    nome: {type: String, required: true}
}, {
    versionKey: false
});

const usuarios = mongoose.model('Usuarios', UsuarioSchemma);

export default usuarios;