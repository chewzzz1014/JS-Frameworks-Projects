import React, { useState, useEffect } from 'react'
import Author from './Author'
import NewQuote from './NewQuote'
import Text from './Text'
import TweetQuote from './TweetQuote'

export default function QuoteBox() {

    const [allQuotes, setAllQuotes] = useState([{
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
    }])
    const [quote, setQuote] = useState(0)
    const [color, setColor] = useState(changeColor())

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                setAllQuotes(data)
            })
    }, [])

    function changeQuote() {
        setQuote(Math.floor(Math.random() * allQuotes.length))
        setColor(changeColor())
    }

    function changeColor() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    let quoteData = allQuotes[quote];
    return (
        <div id='wrapper'>
            <div id='quote-box'>
                <div className='box-top'>
                    <Text text={quoteData.text} color={color} />
                    <Author author={quoteData.author} color={color} />
                </div>

                <div className='box-bottom'>
                    <TweetQuote color={color} />
                    <NewQuote handler={changeQuote} color={color} />
                </div>
            </div>
        </div>
    )
}