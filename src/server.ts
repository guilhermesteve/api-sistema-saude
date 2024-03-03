import express, {Express}from 'express'

import routes from './routes'

const app : Express = express()

const port : number = 80

app.use("/api/v1", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})