import React from 'react'

export default function NewQuote(props) {

    const { handler, color } = props

    return (
        <button id='new-quote' onClick={handler}>
            New Quote
        </button>
    )
}