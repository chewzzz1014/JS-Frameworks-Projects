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

    const selectedItem = JSON.parse(localStorage.getItem('selectedItems'))
    const currentScore = Number(localStorage.getItem('score'))
    let color = ''
    if (selectedItem.includes(value) && isCorrect) {
        localStorage.setItem('score', (currentScore + 1).toString())
        color = 'correct-ans'
    } else if (selectedItem.includes(value) && !isCorrect) {
        color = 'wrong-ans'
    }

    if (isCorrect) {
        color = 'correct-ans'
    }

    return (
        <>
            {console.log(gameMode + " " + isSelectedState)}
            {console.log(selectedItem)}
            {console.log('is in ' + selectedItem.includes(value))}
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
                className={color}
                disabled
            >
                {he.decode(text)}
            </button >}
        </>
    )
}