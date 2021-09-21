import React from 'react'
import { Link } from 'react-router-dom'

export const ItemMenuSearch = ({breed}) => {

    return (
          
        <Link to={`/infoCat/${breed.id}`} className="nav__search">
            <div className="div__item__search">   
                <span className="search__name">{breed.name}</span>               
            </div>
        </Link>
        
    )
}
