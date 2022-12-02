import React from 'react'
import { BsTwitter } from 'react-icons/bs';

export default function TweetQuote(props) {

    const { color, text, author } = props

    const styles = {
        backgroundColor: color
    }

    const contents = `%22${text}%22%20${author}%20%23quotes`

    return (
        <div>
            <a href={`https://twitter.com/intent/tweet?text=${contents}`} id='tweet-quote' style={styles}>
                <BsTwitter size='30px' />
            </a>
        </div>
    )
}