"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PacientesController_1 = __importDefault(require("../controllers/PacientesController"));
const router = express_1.default.Router();
router.post("/", PacientesController_1.default.cadastrar);
router.get("/list", PacientesController_1.default.listar);
exports.default = router;
