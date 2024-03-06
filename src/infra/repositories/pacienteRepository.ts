import { IPaciente } from "../../domain/interface/IPaciente";
import { IPacienteRepository } from "../../domain/interface/IPacienteRepository.";
import { PacienteModel } from "../model/pacienteModel";

export class PacienteRepository implements IPacienteRepository {

   async listarTodos(): Promise<IPaciente[]> {
       const pacientes = await PacienteModel.find()
       
       return pacientes
    }

   async cadastrar(paciente: IPaciente): Promise<IPaciente> {
        const pacienteNovo = new PacienteModel(paciente)

        pacienteNovo.save()

        return paciente
    }

}