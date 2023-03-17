import * as api from '../api'

// action creators
const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        console.log(data)

        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        console.log(data)

        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export {
    getPosts,
    createPost
}