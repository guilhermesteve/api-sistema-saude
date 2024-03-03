import { IPacienteRepository } from "../../../domain/interface/IPacienteRepository."

export class ConsultarPacientesUseCase {
    private pacienteRepository

    constructor(pacientesRepository: IPacienteRepository){
        this.pacienteRepository = pacientesRepository
    }

    async execute(){

     const pacientes = await this.pacienteRepository.listarTodos()

     return pacientes 
    }
}
