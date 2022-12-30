import React from 'react'
import Option from './Option'
import { nanoid } from 'nanoid'
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

    const optionsEle = options.map(o => {
        const k = nanoid()
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