import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from './postsSlice'

function PostList() {
    const posts = useSelector(selectAllPost)
    const postsEle = posts.map(p => (
        <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content.substring(0, 100)}</p>
        </article>
    ))


    return (
        <section>
            <h2>Posts</h2>
            {postsEle}
        </section>
    )
}

export default PostList
