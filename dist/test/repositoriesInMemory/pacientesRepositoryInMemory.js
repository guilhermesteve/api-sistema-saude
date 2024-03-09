"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PacientesRepositoryInMemory {
    constructor() {
        this.listarTodos = () => __awaiter(this, void 0, void 0, function* () {
            return this.pacientes;
        });
        this.cadastrar = (paciente) => __awaiter(this, void 0, void 0, function* () {
            this.pacientes.push(paciente);
            return paciente;
        });
        const paciente_1 = {
            nome: "Jõao",
            idade: 30
        };
        const paciente_2 = {
            nome: "Luiz",
            idade: 40,
            cidade: "Florianópolis"
        };
        this.pacientes = [paciente_1, paciente_2];
    }
}
exports.default = PacientesRepositoryInMemory;
