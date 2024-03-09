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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consultarPacientes_1 = require("../aplication/use_cases/pacientes/consultarPacientes");
const pacientesRepositoryInMemory_1 = __importDefault(require("../test/repositoriesInMemory/pacientesRepositoryInMemory"));
const cadastrarPaciente_UseCase_1 = require("../aplication/use_cases/pacientes/cadastrarPaciente.UseCase");
const pacienteRepository_1 = require("../infra/repositories/pacienteRepository");
const pacientesRepositoryInMemory = new pacientesRepositoryInMemory_1.default();
const pacienteRepository = new pacienteRepository_1.PacienteRepository();
const consultarPacientesUseCase = new consultarPacientes_1.ConsultarPacientesUseCase(pacienteRepository);
const cadastrarPacienteUseCase = new cadastrarPaciente_UseCase_1.CadastrarPacienteUseCase(pacienteRepository);
const PacientesController = {
    listar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const pacientes = yield consultarPacientesUseCase.execute();
        console.log("Pacientes", pacientes);
        res.json({ pacientes: pacientes });
    }),
    cadastrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { nome, idade, cidade } = req.body;
        const result = yield cadastrarPacienteUseCase.execute({ nome, idade, cidade }, "API Node");
        res.status(201).json(result);
        console.log("cadastro de pacientes!");
    })
};
exports.default = PacientesController;
