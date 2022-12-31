import React from 'react'
import Option from './Option'
import shuffle from '../utils/shuffleArr'
const he = require('he')

export default function Question(props) {

    const { question, gameMode, value } = props
    const correctOption = {
        text: question.correct_answer + ' (correct)',
        isCorrect: true,
    }
    const incorrectOptions = question.incorrect_answers.map(o => {
        return {
            text: o,
            isCorrect: false,
            isSelected: false
        }
    })
    const options = shuffle([
        correctOption,
        ...incorrectOptions
    ])

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
        <>
            <div class='question-section'>
                <p className='question'>{he.decode(question.question)}</p>
                <div className='all-options'>{optionsEle}</div>
            </div>
            <hr />
        </>
    )
}