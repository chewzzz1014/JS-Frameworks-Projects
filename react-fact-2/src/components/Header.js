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

                {/* Add style */}
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header