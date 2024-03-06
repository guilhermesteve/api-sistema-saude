import { IPaciente } from "../../domain/interface/IPaciente"
import { IPacienteRepository } from "../../domain/interface/IPacienteRepository."
import { IDatabseStrategy } from "../../infra/database/databaseStrategy"

class PacientesRepositoryInMemory implements IPacienteRepository {

   private pacientes : IPaciente[]

   constructor(){
    const paciente_1 : IPaciente = {
      nome: "Jõao",
      idade: 30
    }

    const paciente_2 : IPaciente = {
      nome: "Luiz",
      idade: 40,
      cidade: "Florianópolis"
    }


    this.pacientes = [paciente_1, paciente_2]
   }

   listarTodos = async () : Promise<IPaciente[]> => {

      return this.pacientes
   } 

   cadastrar = async (paciente: IPaciente): Promise<IPaciente> => {
      this.pacientes.push(paciente)

      return paciente
   }
 
}

export default PacientesRepositoryInMemory