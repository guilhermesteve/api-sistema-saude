import express , { Router }from 'express'
import pacientesRoutes from "./pacientes"

const router : Router = express.Router()

router.use("/pacientes", pacientesRoutes)


export default router