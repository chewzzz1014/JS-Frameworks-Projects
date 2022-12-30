import React, { useState, useEffect } from 'react'
import Question from './Question'

export default function GameMode() {

    console.log('rerender')
    const [questions, setQuestions] = useState([])
    const [gameMode, setGameMode] = useState('selecting')

    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify([]))
        localStorage.setItem('score', "0")
        localStorage.setItem('activeBtns', JSON.stringify([0, 0, 0, 0, 0]))
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
        //console.log(localStorage.getItem('selectedItems'))
    }

    function handlePlayAgain() {
        localStorage.setItem('selectedItems', JSON.stringify([]))
        localStorage.setItem('score', "0")
        localStorage.setItem('activeBtns', JSON.stringify([0, 0, 0, 0, 0]))
        getData()
        setGameMode('selecting')
    }

    console.log(questions)
    let questionsElement = questions.map((q, idx) => {
        const k = idx.toString()
        return <Question
            question={q}
            key={k}
            value={k}
            gameMode={gameMode}
        />
    })
    return (
        <div className='question'>
            {questionsElement}
            {gameMode === 'selecting' && <button onClick={handleCheck}>
                Check Answer
            </button>}
            {gameMode === 'checking' && `You score ${localStorage.getItem('score')}/5 correct answers`}
            {gameMode === 'checking' && <button onClick={handlePlayAgain}>
                Play Again
            </button>}
        </div>
    )
}