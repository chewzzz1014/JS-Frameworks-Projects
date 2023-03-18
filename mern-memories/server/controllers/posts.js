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
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { _id, ...post }, { new: true })

        res.json(updatePost)
    }
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id')
    } else {
        await PostMessage.findByIdAndRemove(_id)

        res.json({
            message: 'Post deleted successfully'
        })
    }
}

const likePost = async (req, res) => {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id')
    } else {
        const post = await PostMessage.findById(_id)
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {
            // ...post,
            likeCount: post.likeCount + 1
        }, { new: true })

        res.json(updatedPost)
    }
}

export {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}