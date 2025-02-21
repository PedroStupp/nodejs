import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import userRoutes from './routes/user.routes'


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/user",userRoutes)

export default app