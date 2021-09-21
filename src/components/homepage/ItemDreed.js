import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import catNotFount from '../../assets/img/istockphoto.jpg'; 

export const ItemDreed = memo(({objBreed}) => {

    const {image, id,name} = objBreed;   

    return (
        <div 
            className="div__info__cat" 
            >
            <Link to={`/infoCat/${id}`} className="link__info">
                <div className="div__img">
                    <img src={image ? image.url : catNotFount} alt={name} />
                </div>

                <span className="span__nameCat">{name}</span>
            </Link>
        </div>   
    )
})
