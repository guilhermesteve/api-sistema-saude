import mongoose from "mongoose";
import { IDatabseStrategy } from "./databaseStrategy";

export class MongoStrategy implements IDatabseStrategy {

    constructor(private uri : string){
        this.uri  = uri
    }

    async connect(): Promise<void> {
        console.log("Mongodb conectando ....")
        await mongoose.connect(this.uri)
        console.log("Mongodb Conectado!")

    }

    async disconnect(): Promise<void> {
        console.log("Mongodb Desconectado ....")
       await mongoose.disconnect()
    }

}