import express from 'express'

import { docRouter } from './routes/doc.js'
import { usersRouter } from './routes/users.js'
import { casosRouter } from './routes/casos.js'
import { companiasRouter } from './routes/companias.js'
import { analistasRouter } from './routes/analistas.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
// para recuperar los datos del body json
app.use(express.json())
app.use(corsMiddleware())

// disable header x-powered-by
app.disable('x-powered-by')

app.use('/doc', docRouter)
app.use('/users', usersRouter)
app.use('/casos', casosRouter)
app.use('/companias', companiasRouter)
app.use('/analistas', analistasRouter)

app.set('port', process.env.PORT ?? 3000)

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})
