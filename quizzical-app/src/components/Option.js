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
                className={selectedItem.includes(value) && isCorrect ? 'correct-ans' : selectedItem.includes(value) && !isCorrect ? 'wrong-ans' : ''}
            >
                {he.decode(text)}
            </button >}
        </>
    )
}