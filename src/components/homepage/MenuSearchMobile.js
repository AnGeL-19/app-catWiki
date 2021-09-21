import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenuMobile, searchBreed } from '../../action/ui';
import { useForm } from '../../hooks/useForm'
import { MenuSearch } from './MenuSearch';

export const MenuSearchMobile = () => {

    const dispatch = useDispatch();

    const [value, handleChangeValue] = useForm({
        search: ''
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(searchBreed(value.search));
    }

    const handleChange = (e) => {
        dispatch(searchBreed(e.target.value));
    }

    const handleClick = () => {
        dispatch(closeMenuMobile());
    }

    return (
        <div className="div_container_menu-search-mobile">
            
            <div className="div__btn-form"
                 >
                <button className="close"
                        onClick={handleClick}>
                    <span className="material-icons">
                    close
                    </span>
                </button>
                

                <form className="form__input__span" onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        className="input__search" 
                        placeholder="Enter your breed"
                        name="search"
                        value={value.search}
                        onChange={handleChangeValue}
                        onChangeCapture={handleChange}
                        autoComplete='off'
                        />
                    <span className="material-icons">search</span>
                </form>
            </div>
           
            
            <MenuSearch className="mobile_menu" />
        </div>
    )
}
