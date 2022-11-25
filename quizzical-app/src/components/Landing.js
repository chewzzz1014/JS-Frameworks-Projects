import React, { useState, useEffect } from 'react'

export default function Landing(props) {

    const { handler } = props

    return (
        <div className='question'>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={handler} className='start-btn'>Start Quiz</button>
        </div>
    )
}