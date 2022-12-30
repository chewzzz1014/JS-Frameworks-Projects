import React from 'react'
import Option from './Option'
const he = require('he')

export default function Question(props) {

    const { question, gameMode, value } = props
    const correctOption = {
        text: question.correct_answer,
        isCorrect: true,
    }
    const incorrectOptions = question.incorrect_answers.map(o => {
        return {
            text: o,
            isCorrect: false,
            isSelected: false
        }
    })
    const options = [
        correctOption,
        ...incorrectOptions
    ]

    const optionsEle = options.map((o, idx) => {
        const k = value + "-" + idx
        return <Option
            key={k}
            value={k}
            text={o.text}
            isCorrect={o.isCorrect}
            isSelected={false}
            gameMode={gameMode}
        />
    })
    return (
        <div>
            {he.decode(question.question)}
            <br />
            {optionsEle}
            <br />
            <br />
        </div>
    )
}