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
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const mongoStrategy_1 = require("./infra/database/mongoStrategy");
const app = (0, express_1.default)();
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
app.use(express_1.default.json());
const port = process.env.port || 3000;
app.use("/api/v1", routes_1.default);
const mongoURI = process.env.MONGODB_URI + "";
const mongoStrategy = new mongoStrategy_1.MongoStrategy(mongoURI);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Example app listening on port ${port}`);
    yield mongoStrategy.connect();
}));
module.exports = app;
