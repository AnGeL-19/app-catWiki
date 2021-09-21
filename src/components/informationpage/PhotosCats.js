import React from 'react'
import { ItemPhotoCat } from './ItemPhotoCat';

export const PhotosCats = ({images}) => {


    return (
        <div className="div__photos__cats">

            {
                images.map( (img,i) => (
                    <ItemPhotoCat key={i} img={img} />
                ))
            }

        </div>
    )
}
