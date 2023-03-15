import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const fetchPosts = async () => {
    await axios.get(BASE_URL)
}

export {
    fetchPosts
}