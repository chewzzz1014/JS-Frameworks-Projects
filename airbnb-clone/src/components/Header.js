import React from 'react';
import header_pics from '../images/header_pics.png'

function Header() {
    return (
        <div className='header'>
            <img src={header_pics} alt="" />
            <h1 id='title'>Online Experience</h1>
            <div id='text-box'>
                <p id='text'>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Header;