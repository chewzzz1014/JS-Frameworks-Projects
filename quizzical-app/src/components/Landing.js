import React, { useState, useEffect } from 'react'

export default function Landing(props) {

    const { handler } = props

    return (
        <div className='landing'>
            <h1 className='landing-txt'>Quizzical</h1>
            <p className='landing-txt'>Test Your Knowlege on Different Domains!</p>
            <button onClick={handler} className='utils-btn start-btn'>Start Quiz</button>
        </div>
    )
}