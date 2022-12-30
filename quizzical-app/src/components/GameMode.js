import React, { useState, useEffect } from 'react'
import Option from './Option'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function GameMode() {

    console.log('rerender')
    const [questions, setQuestions] = useState([])
    const [gameMode, setGameMode] = useState('selecting')

    useEffect(() => {
        getData()
        console.log('in useEffect')
    }, [])

    function getData() {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }

    function handleRegenerate() {
        getData()
        console.log('in handlerRegenerate')
    }

    function handleCheck() {
        console.log('checking')
        setGameMode('checking')
    }

    console.log(questions)
    const questionsElement = questions.map(q => {
        return <Question
            question={q}
            key={nanoid()}
            gameMode={gameMode}
        />
    })
    return (
        <div className='question'>
            {questionsElement}
            <button onClick={handleCheck}>
                Check Answer
            </button>
        </div>
    )
}