import express, {Express}from 'express'

import routes from './routes'
import { MongoStrategy } from './infra/database/mongoStrategy';

const app : Express = express()
import {configDotenv } from 'dotenv'
configDotenv()

app.use(express.json());

const port : number = 80

app.use("/api/v1", routes)

const mongoURI = process.env.MONGODB_URI + ""

const mongoStrategy = new MongoStrategy(mongoURI)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)

  await mongoStrategy.connect()
})
