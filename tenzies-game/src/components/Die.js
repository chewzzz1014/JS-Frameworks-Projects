import React, { useState } from 'react'
import Number from './Number'

export default function Die() {

    function allNewDice() {
        const randomNum = () => Math.floor(Math.random() * 6) + 1

        const arr = []
        for (let i = 0; i < 5; i++)
            arr.push(randomNum())

        return arr.map((ele) =>
            <Number value={ele} />
        )
    }

    return (
        <div className='number-section'>
            <div className='number-row'>
                {allNewDice()}
            </div>
            <div className='number-row'>
                {allNewDice()}
            </div>
        </div>
    )
}