import React from 'react'
import { Link } from 'react-router-dom';

import catNotFound from '../../assets/img/istockphoto.jpg';

export const ItemDiscoverAllBreeds = ({breed}) => {
    return (

        <Link className="nav__item__discover"
              to={`/infoCat/${breed.id}`}>
            
            <div className="item__img__discover">
                <img src={(breed.image)? breed.image.url:catNotFound } alt="" />
            </div>
            
            <span className="item__name__discover">{breed.name}</span>

        </Link>
    )
}
