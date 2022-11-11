import React from 'react'
import person from '../person.png'

function Header() {
    return (
        <div className="header">
            <img src={person} alt="" className='profile' />
            <div className="center-text name">
                <h1>Laura Smith</h1>
            </div>
            <div className="center-text job-title">
                Frontend Developer
            </div>
            <div className="center-text website">
                <small>laurasmith.website</small>
            </div>

            <div className="button-grp">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}

export default Header