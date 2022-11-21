import React, { useState, useEffect } from 'react'
import Author from './Author'
import NewQuote from './NewQuote'
import Text from './Text'
import TweetQuote from './TweetQuote'

export default function QuoteBox() {

    const [allQuotes, setAllQuotes] = useState([{ text: "lorem  mmoefjreigjrt", author: "chewzzz" }])
    const [quote, setQuote] = useState(0)

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                setAllQuotes(data)
            })
    }, [])

    function changeQuote() {
        setQuote(Math.floor(Math.random() * allQuotes.length))
    }

    let quoteData = allQuotes[quote];
    return (
        <div id='wrapper'>
            <div id='quote-box'>
                <div className='box-top'>
                    <Text text={quoteData.text} />
                    <Author author={quoteData.author} />
                </div>

                <div className='box-bottom'>
                    <TweetQuote />
                    <NewQuote handler={changeQuote} />
                </div>
            </div>
        </div>
    )
}