import express , { Router }from 'express'
import PacientesController from '../controllers/PacientesController'

const router : Router = express.Router()


router.post("/", PacientesController.cadastrar)
router.get("/list", PacientesController.listar)


export default router
