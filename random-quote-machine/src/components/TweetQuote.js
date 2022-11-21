import React from 'react'
import { BsTwitter } from 'react-icons/bs';

export default function TweetQuote(props) {

    const { color } = props

    const styles = {
        backgroundColor: color
    }

    return (
        <div>
            <a href="#" id='tweet-quote' style={styles}>
                <BsTwitter size='30px' />
            </a>
        </div>
    )
}