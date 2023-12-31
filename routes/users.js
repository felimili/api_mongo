import { Router } from 'express'
import { UserController } from '../controllers/user.js'

export const usersRouter = Router()

usersRouter.get('/', (UserController.getAll))

usersRouter.get('/:id', (UserController.getId))

usersRouter.post('/', (UserController.create))

usersRouter.patch('/:id', (UserController.update))

usersRouter.delete('/:id', (UserController.delete))
