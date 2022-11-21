import React from 'react'
import { BsTwitter } from 'react-icons/bs';

export default function TweetQuote(props) {

    const { color } = props

    return (
        <div>
            <a href="#" id='tweet-quote'>
                <BsTwitter size='30px' />
            </a>
        </div>
    )
}