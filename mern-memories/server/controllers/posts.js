import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

// handlers for posts route
const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        console.log(postMessage)

        res.status(200).send(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id')
    } else {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })

        res.json(updatePost)
    }
}

export {
    getPosts,
    createPost,
    updatePost
}