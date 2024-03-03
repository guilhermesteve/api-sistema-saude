import { IPaciente } from "../../../domain/interface/IPaciente";
import { IPacienteRepository } from "../../../domain/interface/IPacienteRepository.";

interface IResponseCadastroPaciente {
    paciente: IPaciente,
    sistemaCadastro: string
}

export class CadastrarPacienteUseCase {
    
    constructor(private pacienteRepository: IPacienteRepository){
        this.pacienteRepository = pacienteRepository
    }

    async execute({nome, idade, cidade} : IPaciente, sistemaCadastro: string) : Promise<IResponseCadastroPaciente> {

        const novoPaciente = {
            nome,
            idade,
            cidade : cidade ?? undefined
        }

        const pacienteCadastrado = await this.pacienteRepository.cadastrar(novoPaciente)

        return { paciente: pacienteCadastrado, sistemaCadastro}

    }
}