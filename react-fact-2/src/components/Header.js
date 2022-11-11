import React from 'react';
import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className='head'>
                    <img src={logo} />
                    <h1>React Fact</h1>
                </div>

                <div>
                    <p>React Course - Project 1</p>
                </div>
            </nav>
        </header>
    )
}

export default Header