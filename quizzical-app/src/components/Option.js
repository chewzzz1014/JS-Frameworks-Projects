import React, { useState } from 'react'
const he = require('he')

export default function Option(props) {

    const { text, isCorrect, isSelected, gameMode } = props

    const [isSelectedState, setIsSelectedState] = useState(isSelected)

    function handleSelect(e) {
        setIsSelectedState(!isSelectedState)
        console.log(isSelectedState)
    }


    return (
        <>
            {console.log(gameMode)}
            {gameMode === 'selecting' && <button
                onClick={(e) => handleSelect(e)
                }
                className={isSelectedState ? 'selected-option' : ''}
            >
                {he.decode(text)}
            </button >}

            {gameMode === 'checking' && <button
                onClick={(e) => handleSelect(e)
                }
                className={isSelectedState && isCorrect ? 'correct-ans' : isSelectedState && !isCorrect ? 'wrong-ans' : ''}
            >
                {he.decode(text)}
            </button >}
        </>
    )
}