import React from 'react';
import { FaAirbnb } from 'react-icons/fa';

function NavBar() {
    return (
        <nav>
            <FaAirbnb size='2.5em' color='#FF5A5F' />
            <h1 id='website_name'>airbnb</h1>
        </nav>
    )
}

export default NavBar;