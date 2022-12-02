import React from 'react'

export default function Options(props) {
    const { handleSelect, text, value } = props
    return (
        <button
            onClick={handleSelect}
            value={value}
        >
            {text}
        </button>
    )
}