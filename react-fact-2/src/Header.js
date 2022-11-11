import React from 'react';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src='./react-logo.png' />

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