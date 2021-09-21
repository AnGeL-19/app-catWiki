import React from 'react'
import { useSelector } from 'react-redux';
import { ItemMenuSearch } from './ItemMenuSearch'

export const MenuSearch = ({className}) => {

    const {allBreeds} = useSelector(state => state.breeds);
    const { nameSearch } = useSelector(state => state.ui);

    const filterBreads = allBreeds.filter( b => b.name.toLowerCase().includes(nameSearch.toLowerCase()));

    return (
        <div className={`div__menu__search ${className}`}>

            <div className="div__scroll__search">
                {
                    (filterBreads.length === 0)
                    ?
                    (
                        <div className="div__item__search">
                            <span className="search__name">There is not</span>
                        </div> 
                    )
                    :
                    (
                        filterBreads.map( fb => (
                            <ItemMenuSearch key={fb.id} breed={fb}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}
