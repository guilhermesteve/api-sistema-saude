import mongoose from "mongoose";
import { IDatabseStrategy } from "./databaseStrategy";

export class MongoStrategy implements IDatabseStrategy {

    constructor(private uri : string){
        this.uri  = uri
    }

    async connect(): Promise<void> {
        console.log("Mongodb Conectado ....")
        await mongoose.connect(this.uri)

    }

    async disconnect(): Promise<void> {
        console.log("Mongodb Desconectado ....")
       await mongoose.disconnect()
    }

}