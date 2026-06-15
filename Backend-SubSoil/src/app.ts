import express from 'express'
import cors from 'cors'

import { wellRouter } from './routes/well.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/wells', wellRouter)

export default app
