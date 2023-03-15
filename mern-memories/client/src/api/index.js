import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const fetchPosts = async () => {
    await axios.get(BASE_URL)
}

const createPost = async (newPost) => {
    await axios.post(BASE_URL, newPost)
}

export {
    fetchPosts,
    createPost
}