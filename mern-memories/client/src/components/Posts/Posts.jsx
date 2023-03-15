import React from 'react'
import Post from './Post/Post'
import useStyles from './styles.js'
import { useSelector } from 'react-redux'

function Posts() {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)

    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts
