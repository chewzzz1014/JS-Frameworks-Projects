import React from 'react'

export default function NewQuote(props) {

    const { handler, color } = props

    const styles = {
        backgroundColor: color
    }

    return (
        <button id='new-quote' onClick={handler} style={styles}>
            New Quote
        </button>
    )
}