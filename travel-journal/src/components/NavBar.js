import React from 'react';
import { GoGlobe } from 'react-icons/go'

function NavBar() {
    return (
        <nav>
            <GoGlobe size='2em' color='white' />
            <div>
                <p id='website-title'>my travel journal</p>
            </div>

        </nav>
    )
}

export default NavBar