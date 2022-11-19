import React, { useState } from 'react'
import { HiPhotograph } from 'react-icons/hi'
import memeData from '../data/memeData'

function Meme() {
    const memes = memeData.data.memes
    const [imgLink, setImgLink] = useState("https://i.imgflip.com/4t0m5.jpg")

    const getRandomMeme = () => {
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        setImgLink(randomMeme.url)
    }

    return (
        <div className='form'>
            <div className='form-fields'>
                <input type='text' placeholder='top text'></input>
                <input type='text' placeholder='bottom text'></input>
            </div>
            <div className='form-button'>
                <button onClick={getRandomMeme}><span><HiPhotograph size='20px' /></span> Get a new meme image</button>
            </div>
            <img src={imgLink} alt="" className='meme' />
        </div>
    )
}

export default Meme




