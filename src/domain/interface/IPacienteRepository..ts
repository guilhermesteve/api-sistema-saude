import { IPaciente } from "./IPaciente";

export interface IPacienteRepository{
    listarTodos() : Promise<IPaciente[]> 
    cadastrar(paciente: IPaciente) : Promise<IPaciente>

}