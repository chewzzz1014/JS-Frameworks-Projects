import React, { useState } from 'react'
import { HiPhotograph } from 'react-icons/hi'
import memeData from '../data/memeData'

function Meme() {
    const memes = memeData.data.memes
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4t0m5.jpg"
    })

    function handleChange(e) {
        const { name, value } = e.target

        setMeme((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const getRandomMeme = () => {
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        setMeme((prev) => {
            return {
                ...prev,
                randomImage: randomMeme.url
            }
        })
    }

    return (
        <div className='form'>
            <div className='form-fields'>
                <input
                    type='text'
                    placeholder='top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}>
                </input>
                <input
                    type='text'
                    placeholder='bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}>
                </input>
            </div>
            <div className='form-button'>
                <button onClick={getRandomMeme}><span><HiPhotograph size='20px' /></span> Get a new meme image</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt="" className='meme-img' />
                <h2 className='meme-text top'>Text 1 Lorem, ipsum dolor sit </h2>
                <h2 className='meme-text bottom'>Text 2 Lorem ipsum dolor sit,.</h2>
            </div>
        </div>
    )
}

export default Meme




