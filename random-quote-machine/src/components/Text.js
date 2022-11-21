import React from 'react'

export default function Text(props) {

    const { text, color } = props

    return (
        <div id='text'>
            <p>{text}</p>
        </div>
    )
}