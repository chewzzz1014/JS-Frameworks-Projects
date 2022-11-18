import React from 'react';
import { BsEmojiSunglassesFill } from 'react-icons/bs'

function Header() {
    return (
        <nav className='header'>
            <div className='nav-left'>
                <BsEmojiSunglassesFill color='white' size='30px' />
                <h2>Meme Generator</h2>
            </div>
            <div className='nav-right'>
                <h4>React Course - Project 3</h4>
            </div>
        </nav>
    )
}

export default Header