import React from 'react'

export default function Author(props) {

    const { author, color } = props

    return (
        <div id='author'>
            <p>- {(author) ? author : 'Unknown'}</p>
        </div>
    )
}