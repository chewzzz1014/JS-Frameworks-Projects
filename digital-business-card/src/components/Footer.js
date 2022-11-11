import React from 'react'
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { SiKaggle } from 'react-icons/si';

function Footer() {
    return (
        <div className="footer">
            <a href="https://m.facebook.com/ziqing.chew.5?eav=AfaGQj5Q_Pd9Gs4NuOv122M6A8MBhUihnj7dcf6X12diC1BELO9wml8mVHpowjaO5Hg&paipv=0" class='logo' target='_blank'><SlSocialFacebook size='20px' /></a>
            <a href="https://github.com/chewzzz1014" class='logo' target='_blank'><SlSocialGithub size='20px' /></a>
            <a href="https://www.linkedin.com/in/ziqingchew" class='logo' target='_blank'><SlSocialLinkedin size='20px' /></a>
            <a href="https://www.kaggle.com/chewziqing" class='logo' target='_blank'><SiKaggle size='20px' /></a>
        </div>
    )
}

export default Footer
