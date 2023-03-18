import * as api from '../api'
import {
    FETCH_ALL,
    UPDATE,
    DELETE,
    CREATE,
    LIKE
} from '../constants/actionType.js'

// action creators
const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        console.log(data)

        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        console.log(data)

        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

const likePost = (id) => async (dispatch) => {
    try {
        await api.likePost(id)
        dispatch({
            type: 'LIKE',
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}