import React from 'react'

export default function Text(props) {

    const { text, color } = props

    const styles = {
        color: color
    }

    return (
        <div id='text' style={styles}>
            <p>{text}</p>
        </div>
    )
}