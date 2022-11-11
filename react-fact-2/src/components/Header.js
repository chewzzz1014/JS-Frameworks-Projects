import React from 'react';
import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className='head'>
                    <img src={logo} />
                    <h3>React Fact</h3>
                </div>

                <div className='title'>
                    <h4>React Course - Project 1</h4>
                </div>
            </nav>
        </header>
    )
}

export default Header