import React from 'react';
import {
    Link,
 } from "react-router-dom";

import catwikiSVG from '../assets/svg/CatwikiLogo.svg';

export const HeadCadWiki = () => {
    return (
        <header className="header__container">
            <Link to="/">
                <img className="header__img" src={catwikiSVG} alt="CatWiki"/>
            </Link>
        </header>
    )
}
