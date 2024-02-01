import express from 'express'
import route from './routes/index.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './app/models/Context.js'

// Connect to DB
db.Connect();
db.RenderDatabase();

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

route(app)

export default app