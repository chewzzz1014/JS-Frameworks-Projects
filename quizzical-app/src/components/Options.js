import React from 'react'

export default function Options(props) {
    const { handleSelect, text, value, isCorrect, isSelected } = props
    return (
        <button
            onClick={handleSelect}
            value={value}
            isCorrect={isCorrect}
            isSelected={isSelected}
        >
            {text}
        </button>
    )
}