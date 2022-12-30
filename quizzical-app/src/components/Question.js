import React from 'react'
import Options from './Options'
const he = require('he')

export default function Question(props) {

    const { question } = props

    return (
        <div>
            {he.decode(question.question)}
            <br />

        </div>
    )
}