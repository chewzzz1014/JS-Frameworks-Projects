import React from 'react'
import Option from './Option'
import { nanoid } from 'nanoid'
const he = require('he')

export default function Question(props) {

    const { question } = props
    const correctOption = {
        text: question.correct_answer,
        isCorrect: true,
    }
    const incorrectOptions = question.incorrect_answers.map(o => {
        return {
            text: o,
            isCorrect: false
        }
    })
    const options = [
        correctOption,
        ...incorrectOptions
    ]

    const optionsEle = options.map(o => {
        return <Option
            key={nanoid()}
            text={o.text}
            isCorrect={o.isCorrect}
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