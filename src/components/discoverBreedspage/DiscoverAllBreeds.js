import React from 'react'
import { ItemDiscoverAllBreeds } from './ItemDiscoverAllBreeds'

export const DiscoverAllBreeds = ({breeds}) => {
    return (
        <div className="div__discover__breads">

            {
                breeds.map( breed => (
                    <ItemDiscoverAllBreeds key={breed.id} breed={breed} />
                ))
            }
            
        </div>
    )
}
