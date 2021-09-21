import React from 'react';

import catwikiSVG from '../assets/svg/CatwikiLogoWhite.svg';

export const Footer = () => {
    return (
        <footer className="footer__divs__info">
            <div className="div__imgSvg">
                <img src={catwikiSVG} alt="catLogo"/>
            </div>
            <div className="div__p__copy">
                <p><span className="copyR">©</span> created by <b>Angel Muñoz</b> - devChallenge.io 2021</p>
            </div>
        </footer>
    )
}
