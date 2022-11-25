import React, { useState, useEffect } from 'react'

export default function Landing(props) {

    const { handler } = props

    return (
        <div className='question'>
            Landing
            <button onClick={handler}>Start Quiz</button>
        </div>
    )
}