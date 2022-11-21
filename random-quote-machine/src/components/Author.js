import React from 'react'

export default function Author(props) {
    return (
        <div id='author'>
            <p>- {(props.author) ? props.author : 'Unknown'}</p>
        </div>
    )
}