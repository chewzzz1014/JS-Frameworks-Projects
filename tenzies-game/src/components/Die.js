import React, { useState, useEffect } from 'react'
import Number from './Number'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function Die() {
    const [dice, setDice] = useState(allNewDice())
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(d => d.isHeld)
        const firstVal = dice[0].value
        const allSameVal = dice.every(d => d.value === firstVal)

        if (allHeld && allSameVal)
            setIsEnd(true)

    }, [dice])

    function randomNum() {
        return Math.floor(Math.random() * 6) + 1
    }

    function allNewDice() {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push({
                value: randomNum(),
                isHeld: false,
                id: nanoid()
            })
        }

        return arr
    }

    function holdDice(id) {
        setDice(prev => prev.map((d) => {
            return (d.id === id) ? { ...d, isHeld: !d.isHeld } : d
        }))
    }

    function rollDice() {
        if (!isEnd)
            setDice(prev => prev.map((d) => {
                return (d.isHeld) ? d :
                    { value: randomNum(), id: nanoid(), isHeld: false }
            }))
        else
            isEnd = setIsEnd(false)
    }

    const diceElements = dice.map((ele) =>
        <Number value={ele} handler={holdDice} />

    )

    return (
        <>
            {isEnd && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <div className='number-section'>
                <div className='number-row'>
                    {diceElements.slice(0, 5)}
                </div>
                <div className='number-row'>
                    {diceElements.slice(5)}
                </div>
            </div>
            <div className='roll-btn-section'>
                <button
                    className='roll-btn'
                    onClick={rollDice}
                >
                    {isEnd ? 'New Game' : 'Roll'}
                </button>
            </div>
        </>
    )
}