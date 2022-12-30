import React from 'react'

export default function Option(props) {

    const { text, isCorrect } = props

    return (
        <button>
            {text}
        </button>
    )
}