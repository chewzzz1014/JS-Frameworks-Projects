import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
const he = require('he')

export default function Question() {

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

    const questionElements = questions.map((ele) => {
        const options = [ele.correct_answer, ...ele.incorrect_answers]

        options.sort((a, b) =>
            0.5 - Math.random()
        )

        const optionsElements = options.map((o) => {
            if (o === ele.correct_answer)
                return (
                    <button>{`${he.decode(o)} (correct answer)`}</button>
                )
            else
                return (
                    <button>{he.decode(o)}</button>
                )
        })

        console.log('in questionElements')

        return (
            <div>
                <h3>{he.decode(ele.question)}</h3>
                {optionsElements}
            </div>
        )
    })

    return (
        <div className='question'>
            <button onClick={handleRegenerate} className='reGen-btn'>Regenerate Questions</button>
            {questionElements}
        </div>
    )
}