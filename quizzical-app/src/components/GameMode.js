import React, { useState, useEffect } from 'react'
import Options from './Options'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function GameMode() {

    console.log('rerender')
    const [questions, setQuestions] = useState([])

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

    console.log(questions)
    const questionsElement = questions.map(q => {
        return <Question
            question={q}
            key={nanoid()}
        />
    })
    return (
        <div className='question'>
            {questionsElement}
        </div>
    )
}