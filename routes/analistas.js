import { Router } from 'express'
import { AnalistaController } from '../controllers/analista.js'

export const analistasRouter = Router()

analistasRouter.get('/', AnalistaController.getAll)

analistasRouter.get('/:id', AnalistaController.getId)

analistasRouter.post('/', AnalistaController.create)

analistasRouter.patch('/:id', AnalistaController.update)

analistasRouter.delete('/:id', AnalistaController.delete)
