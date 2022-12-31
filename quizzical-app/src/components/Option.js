import React, { useState, useEffect } from 'react'
const he = require('he')

export default function Option(props) {

    const { value, text, isCorrect, gameMode } = props
    let { isSelected } = props

    const [isSelectedState, setIsSelectedState] = useState(isSelected)

    function handleSelect(e) {
        const numQ = Number(value.split('-')[0])
        let activeBtns = JSON.parse(localStorage.getItem('activeBtns'))
        console.log(activeBtns)
        console.log(numQ)

        const oldRecord = JSON.parse(localStorage.getItem('selectedItems'))

        // select or deselect
        if (Number(activeBtns[numQ]) === 0) {
            // select
            if (!isSelectedState) {
                localStorage.setItem("selectedItems", JSON.stringify(oldRecord.concat(value)))
                console.log(localStorage.getItem('selectedItems'))
                activeBtns[numQ] = 1
                localStorage.setItem('activeBtns', JSON.stringify(activeBtns))
            } else { // deselect
                const newRecord = oldRecord.filter(e => e !== value)
                localStorage.setItem("selectedItems", JSON.stringify([
                    ...newRecord
                ]))
                activeBtns[numQ] = 0
                localStorage.setItem('activeBtns', JSON.stringify(activeBtns))
            }
            setIsSelectedState(!isSelectedState)
            console.log(value)
            console.log(isSelected)
        } else { // deselect only
            if (isSelectedState) {
                const newRecord = oldRecord.filter(e => e !== value)
                localStorage.setItem("selectedItems", JSON.stringify([
                    ...newRecord
                ]))
                activeBtns[numQ] = 0
                localStorage.setItem('activeBtns', JSON.stringify(activeBtns))
                setIsSelectedState(!isSelectedState)
                console.log(value)
                console.log(isSelected)
            }
        }
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
    if (isCorrect)
        color = 'correct-ans'

    return (
        <>
            {gameMode === 'selecting' && <button
                onClick={(e) => handleSelect(e)
                }
                className={`option-btn ${selectedItem.includes(value) ? 'selected-option' : ''}`}
            >
                {he.decode(text)}
            </button >}

            {gameMode === 'checking' && <button
                onClick={(e) => handleSelect(e)
                }
                className={`${color} option-btn`}
                disabled
            >
                {he.decode(text)}
            </button >}
        </>
    )
}