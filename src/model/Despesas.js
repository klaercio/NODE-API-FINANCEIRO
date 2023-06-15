import mongoose from "mongoose";

const DespesasSchema = new mongoose.Schema({
    id: {type: String},
    fixa: {type: Boolean, required: true},
    valor: {type: Number, required: true},
    parcelas: {type: Number},
    descricao: {type: String},
    idUsuario: {type: mongoose.Schema.Types.Array, ref:"Usuarios", required: true}
}, {
    versionKey: false,
});

const despesas = mongoose.model('Despesas', DespesasSchema);

export default despesas;