import React from 'react';
import { Link } from 'react-router-dom';

import imgNotFound from '../../assets/img/istockphoto.jpg';

export const ItemTopBreed = ({breed,index}) => {
    return (
        <Link to={`/infoCat/${breed.id}`} className="nav-link__info">
            <div className="div__item__cat">

                <div className="div__img-cat__item">
                    <img src={(breed.image)? breed.image.url : imgNotFound} alt="catPhoto" />
                </div>

                <div className="div__info-cat__item">
                    <h3>{index}. {breed.name}</h3>
                    <div className="div__img-cat__item-ocult">
                        <img src={(breed.image)? breed.image.url : imgNotFound} alt="catPhoto" />
                    </div>
                    <p>
                        {breed.description}
                    </p>
                </div>

            </div>
        </Link>
    )
}
