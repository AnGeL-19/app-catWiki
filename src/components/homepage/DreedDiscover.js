import React, { memo } from 'react'
import { ItemDreed } from './ItemDreed'

export const DreedDiscover = memo(({breeds}) => {

    return (
        <div className="div__images__cats">

            {
                breeds.map( breed => (
                    <ItemDreed key={breed.id} objBreed={breed}/>
                ))
            }
        </div>
    )
})