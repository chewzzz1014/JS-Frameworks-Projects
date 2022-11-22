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

                <div className="toggler">
                    <p className="toggler-light">Light</p>
                    <div
                        className="toggler-slider"
                    // onClick={props.toggleDarkMode}
                    >
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <p className="toggler-dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}

export default Header