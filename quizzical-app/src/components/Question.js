import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
const he = require('he')

export default function Question() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, [])


    const questionElements = questions.map((ele) => {
        const options = [ele.correct_answer, ...ele.incorrect_answers]

        options.sort((a, b) =>
            0.5 - Math.random()
        )

        const optionsElements = options.map((o) => {
            if (o === ele.correct_answer)
                return (
                    <button>{`${o} (correct answer)`}</button>
                )
            else
                return (
                    <button>{o}</button>
                )
        })

        return (
            <div>
                <h3>{he.decode(ele.question)}</h3>
                {optionsElements}
            </div>
        )
    })

    return (
        <div className='question'>
            {questionElements}
        </div>
    )
}