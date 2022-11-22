import React, { useState } from 'react'
import Number from './Number'

export default function Die() {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const randomNum = () => Math.floor(Math.random() * 6) + 1

        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push({
                value: randomNum(),
                isHeld: true
            })
        }

        return arr
    }

    function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map((ele) =>
        <Number value={ele} />

    )

    return (
        <>
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
                    Roll
                </button>
            </div>
        </>
    )
}