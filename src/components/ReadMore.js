import React from 'react';
import { Link } from 'react-router-dom';

export const ReadMore = ({link,target,href}) => {
    return (
        <Link className="link__see__more"
             to={link} 
            >             
            <span className="span__see">SEE MORE</span>
            <span className="material-icons">arrow_right_alt</span>
        </Link>
    )
}
