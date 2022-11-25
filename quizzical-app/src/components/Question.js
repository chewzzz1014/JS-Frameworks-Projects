import React, { useState, useEffect } from 'react'

export default function Question() {

    const [questions, setQuestions] = useState([])

    fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuestions(data.results))

    const questionElements = questions.map((ele) => {
        return (
            <div>
                <h3>{ele.question}</h3>
            </div>
        )
    })

    return (
        <div className='question'>
            <p></p>
        </div>
    )
}