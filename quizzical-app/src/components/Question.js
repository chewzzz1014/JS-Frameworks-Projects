import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
const he = require('he')

export default function Question() {

    console.log('rerender')
    const [questions, setQuestions] = useState([])

    const questionsAnswers = [0, 0, 0, 0, 0]
    const questionsAnswersId = ['', '', '', '', '']
    const questionsSelected = [0, 0, 0, 0, 0]
    const questionsSelectedId = ['', '', '', '', '']

    const result = [0, 0, 0, 0, 0]

    useEffect(() => {
        getData()
        console.log('in useEffect')
    }, [])

    function getData() {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }

    function handleSelect(e) {
        const numQuestion = parseInt(e.currentTarget.className.split(" ")[0])
        questionsSelectedId[numQuestion] = e.currentTarget.id
        questionsSelected[numQuestion] = e.currentTarget.value
        console.log(e.target)
        console.log(questionsSelectedId)
    }

    function handleCheck() {
        questionsSelected.forEach((ele, idx) => {
            let selected = document.getElementById(questionsSelectedId[idx])
            let answer = document.getElementById(questionsAnswersId[idx])

            if (ele === questionsAnswers[idx]) {
                selected.style.backgroundColor = 'green'
                result[idx] = 1
            }
            else
                answer.style.backgroundColor = 'red'
        })

        console.log(questionsAnswers)
        console.log(questionsSelected)
        console.log(result)
        console.log(document.getElementById(questionsAnswers[0]))
    }

    function handleRegenerate() {
        getData()
        console.log('in handlerRegenerate')
    }

    const questionElements = questions.map((ele, idxEle) => {
        const options = [ele.correct_answer, ...ele.incorrect_answers]

        options.sort((a, b) =>
            0.5 - Math.random()
        )

        const optionsElements = options.map((o, idxO) => {
            const strRef = `${idxEle} ${idxO}`
            if (o === ele.correct_answer) {
                const ansId = nanoid()
                questionsAnswersId[idxEle] = ansId
                questionsAnswers[idxEle] = o
                return (
                    <button
                        id={ansId}
                        className={strRef}
                        onClick={handleSelect}
                        value={o}
                    >
                        {`${he.decode(o)} (correct answer)`}
                    </button>
                )
            }
            else {
                return (
                    <button
                        id={nanoid()}
                        className={strRef}
                        onClick={handleSelect}
                        value={o}
                    >
                        {`${he.decode(o)}`}
                    </button>
                )
            }
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
            {console.log(questionsAnswers)}
            <button onClick={handleRegenerate} className='reGen-btn'>Regenerate Questions</button>
            {questionElements}
            <button className='check-btn' onClick={handleCheck}>Check Answers</button>
        </div>
    )
}