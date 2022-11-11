import React from 'react'
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { SiKaggle } from 'react-icons/si';

function Footer() {
    return (
        <div className="footer">
            <a href="#"><SlSocialFacebook /></a>
            <a href="#"><SlSocialGithub /></a>
            <a href="#"><SlSocialLinkedin /></a>
            <a href="#"><SiKaggle /></a>
        </div>
    )
}

export default Footer
