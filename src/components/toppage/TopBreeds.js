import React from 'react'
import { useSelector } from 'react-redux';
import { ItemTopBreed } from './ItemTopBreed'

export const TopBreeds = () => {

    const { popularBreed } = useSelector(state => state.breeds);

    const popular = popularBreed.filter( (p,i) => i%2===1 ).slice(0,10)

    return (
        <div className="div__top__breeds">

           {
               popular.map( (breed, i) => (
                    <ItemTopBreed key={breed.id} breed={breed} index={i+1}/>
               ))
           }
            

        </div>
    )
}
