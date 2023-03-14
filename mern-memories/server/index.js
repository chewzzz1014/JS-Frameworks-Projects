// es module import
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRouter from './routes/posts.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => console.log('Mongo connected'))
    .catch((err) => { console.log(err.message) })

app.use('/posts', postRouter)

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})