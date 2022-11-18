import React from 'react'
import { HiPhotograph } from 'react-icons/hi'
import memeData from '../data/memeData'

function Meme() {
    const memes = memeData.data.memes

    const getRandomMeme = () => {
        alert(memes[Math.floor(Math.random() * memes.length)].name)
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
        </div>
    )
}

export default Meme




