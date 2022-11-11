import React from 'react'
import Chew_212360 from '../pic/Chew_212360.jpg'
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';

function Header() {
    return (
        <div className="header">
            <div className="img-container">
                <img src={Chew_212360} alt="" className='profile' />
            </div>


            <div className="center-text name">
                <h1>Chew Zi Qing</h1>
            </div>

            <div className="center-text job-title">
                <p id='job-title-text'>Fullstack Developer</p>
            </div>

            <div className="center-text website">
                <small><a href="#"></a></small>
            </div>

            <div className="button-grp">
                <form action="mailto:chewziqing@gmail.com" target='_blank'>
                    <button id='mail-btn'><AiFillMail /> Email</button>
                </form>

                <form action="https://www.linkedin.com/in/ziqingchew" target='_blank'>
                    <button id='linkedin-btn'><AiFillLinkedin /> LinkedIn</button>
                </form>
            </div>
        </div>
    )
}

export default Header