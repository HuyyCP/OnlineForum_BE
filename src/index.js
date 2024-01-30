import { port } from './config/index.js'
import express from 'express'
import route from './routes/index.js'


const app = express()
route(app)


app.listen(port)