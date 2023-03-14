import express from 'express'

const postRouter = express.Router()

postRouter
    .route('/')
    .get((req, res) => {
        res.send('Hello')
    })

export default postRouter