import axios from 'axios'

const BASE_URL = 'http://localhost:5000/posts'

const fetchPosts = async () => {
    return await axios.get(BASE_URL)
}

const createPost = async (newPost) => {
    return await axios.post(BASE_URL, newPost)
}

export {
    fetchPosts,
    createPost
}