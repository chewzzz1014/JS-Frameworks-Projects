import React, { useState } from 'react'
const he = require('he')

export default function Option(props) {

    const { value, text, isCorrect, isSelected, gameMode } = props

    const [isSelectedState, setIsSelectedState] = useState(isSelected)

    function handleSelect(e) {
        const oldRecord = JSON.parse(localStorage.getItem('selectedItems'))
        if (!isSelectedState) {
            localStorage.setItem("selectedItems", JSON.stringify(oldRecord.concat(value)))
            console.log(localStorage.getItem('selectedItems'))
        } else {
            const newRecord = oldRecord.filter(e => e !== value)
            localStorage.setItem("selectedItems", JSON.stringify([
                ...newRecord
            ]))
        }

        setIsSelectedState(!isSelectedState)
        console.log(value)
    }

    return (
        <>
            {console.log(gameMode + " " + isSelectedState)}
            {<button
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