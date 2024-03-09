import mongoose, { Document, Schema } from "mongoose";
import { IPaciente } from "../../domain/interface/IPaciente";


const pacienteSchema: Schema = new Schema({
    nome: {type: String, required: true},
    email: String,
    cidade: String
})


interface IPacienteDocument extends IPaciente, Document {}


export const PacienteModel = mongoose.model<IPacienteDocument>("Paciente", pacienteSchema, "Paciente")