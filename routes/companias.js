import { Router } from 'express'
import { CompaniaController } from '../controllers/compania.js'

export const companiasRouter = Router()

companiasRouter.get('/', CompaniaController.getAll)

companiasRouter.get('/:id', CompaniaController.getById)

companiasRouter.post('/', CompaniaController.create)

companiasRouter.delete('/:id', CompaniaController.delete)

companiasRouter.patch('/:id', CompaniaController.update)
