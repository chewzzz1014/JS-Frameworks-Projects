import React from 'react'
import Author from './Author'
import NewQuote from './NewQuote'
import Text from './Text'
import TweetQuote from './TweetQuote'

export default function QuoteBox() {
    return (
        <div id='quote-box'>
            <Text />
            <Author />
            <NewQuote />
            <TweetQuote />
        </div>
    )
}