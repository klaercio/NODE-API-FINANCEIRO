import mongoose from "mongoose";

const DespesasSchema = new mongoose.Schema({
    id: {type: String},
    fixa: {type: Boolean, required: true},
    parcelas: {type: Number},
    idUsuario: {type: mongoose.Schema.Types.Array, ref:"Usuarios", required: true}
});

const despesas = mongoose.model('Despesas', DespesasSchema);

export default despesas;