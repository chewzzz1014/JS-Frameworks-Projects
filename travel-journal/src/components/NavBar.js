import React from 'react';
import { GoGlobe } from 'react-icons/go'

function NavBar() {
    return (
        <nav>
            <GoGlobe size='2em' color='white' />
            <p id='website-title'> my travel journal</p>
        </nav>
    )
}

export default NavBar