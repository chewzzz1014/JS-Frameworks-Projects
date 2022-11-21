import React from 'react'

export default function Author(props) {

    const { author, color } = props

    const styles = {
        color: color
    }

    return (
        <div id='author' style={styles}>
            <p>- {(author) ? author : 'Unknown'}</p>
        </div>
    )
}