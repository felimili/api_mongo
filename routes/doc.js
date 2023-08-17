import { Router } from 'express'
import { DocController } from '../controllers/doc.js'

export const docRouter = Router()

docRouter.get('/', DocController.getAll)

docRouter.get('/:id', DocController.getId)

docRouter.post('/', DocController.create)

docRouter.delete('/:id', DocController.delete)

docRouter.patch('/:id', DocController.update)
