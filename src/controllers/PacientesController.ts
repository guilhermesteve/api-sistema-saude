import { Request, Response } from "express"

import {ConsultarPacientesUseCase} from "../aplication/use_cases/pacientes/consultarPacientes"
import PacientesRepositoryInMemory from "../test/repositoriesInMemory/pacientesRepositoryInMemory"
import { CadastrarPacienteUseCase } from "../aplication/use_cases/pacientes/cadastrarPaciente.UseCase"
import { PacienteRepository } from "../infra/repositories/pacienteRepository"

const pacientesRepositoryInMemory = new PacientesRepositoryInMemory()

const pacienteRepository = new PacienteRepository()

const consultarPacientesUseCase = new ConsultarPacientesUseCase(pacienteRepository)
const cadastrarPacienteUseCase = new  CadastrarPacienteUseCase(pacienteRepository)

const PacientesController = {
      listar : async ( req : Request, res: Response) => {

        const pacientes = await consultarPacientesUseCase.execute()

        console.log("Pacientes", pacientes)
        
        res.json({pacientes: pacientes})
    },

    cadastrar : async (req : Request, res: Response) => {

      const {nome, idade, cidade } = req.body

      const result = await cadastrarPacienteUseCase.execute({nome, idade,cidade}, "API Node")

      res.status(201).json(result)

      console.log("cadastro de pacientes!")
    }
}

export default PacientesController