import { Router } from 'express'
import { CasoController } from '../controllers/caso.js'

export const casosRouter = Router()

casosRouter.get('/', CasoController.getAll)

casosRouter.get('/:id', CasoController.getId)
