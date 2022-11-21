import React from 'react'

export default function NewQuote(props) {
    return (
        <button id='new-quote' onClick={props.handler}>
            New Quote
        </button>
    )
}