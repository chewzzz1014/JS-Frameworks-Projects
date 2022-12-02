import React from 'react'
import { BsTwitter } from 'react-icons/bs';

export default function TweetQuote(props) {

    const { color, tweetHandler } = props

    const styles = {
        backgroundColor: color
    }

    return (
        <div>
            <button id='tweet-quote' style={styles} onClick={tweetHandler}>
                <BsTwitter size='30px' />
            </button>
        </div>
    )
}