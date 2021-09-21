import React, { useEffect, useMemo } from 'react'
import { HeadCadWiki } from '../components/HeaderCadWiki';
import { Link } from 'react-router-dom';

import heroImagelg from '../assets/img/HeroImagelg.png';
import catwikiSVG from '../assets/svg/CatwikiLogoWhite.svg';

import imgCat1 from '../assets/img/image 1.png';
import imgCat2 from '../assets/img/image 2.png';
import imgCat3 from '../assets/img/image 3.png';

import { ReadMore } from '../components/ReadMore';
import { Footer } from '../components/Footer';
import { DreedDiscover } from '../components/homepage/DreedDiscover';

import '../styles/homePage/menuSearch.scss';
import '../styles/homePage/menuSearchMobile.scss';
import { MenuSearch } from '../components/homepage/MenuSearch';
import { useForm } from '../hooks/useForm';

import { useDispatch, useSelector } from 'react-redux';
import { imgsRandom } from '../helpers/imgsRandom';
import { noLoadingPage, openMenuMobile, searchBreed} from '../action/ui';
import { cleanBreedActivated } from '../action/breeds';
import { MenuSearchMobile } from '../components/homepage/MenuSearchMobile';


export const HomePage = () => {

    const dispatch = useDispatch();
    const {popularBreed} = useSelector(state => state.breeds);
    const {menuOpen} = useSelector(state => state.ui);
    
    useEffect(() => {
        dispatch(cleanBreedActivated());
        dispatch(noLoadingPage());
    }, [dispatch])


    const imgsMemo = useMemo(() => imgsRandom(popularBreed),popularBreed);

    const [value, handleChangeValue] = useForm({
        search: ''
    })

    const handleVisible = () => {
        return (value.search.trim() <= 0) ? false: true
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(searchBreed(value.search))
    }

    const handleChange = (e) => {
        dispatch(searchBreed(e.target.value))
    }

    const handleSelect = () => {
        if(window.screen.width <= 510){
            dispatch(openMenuMobile());
        }      
    }

    return (
        <>

            {
                menuOpen
                ?
                (
                    <MenuSearchMobile />
                )
                :
                (
                    <>
                    <HeadCadWiki />

                    <main className="main__container__breeds">
        
                        <div className="div_container__search">
                            <img className="img__cat" src={heroImagelg}  alt="cat" />
        
                            <div className="div__info__search">
                                <div className="div_img">
                                    <img src={catwikiSVG} alt="catLogo" />
                                </div>
                                <p className="infoSearch">Get to know more about your cat breed</p>
        
                                <form className="form__input__span" onSubmit={handleOnSubmit}>
                                    <input
                                        type="text"
                                        className="input__search" 
                                        placeholder="Enter your breed"
                                        name="search"
                                        value={value.search}
                                        onChange={handleChangeValue}
                                        onChangeCapture={handleChange}
                                        onSelect={handleSelect}
                                        autoComplete='off'
                                        />
                                    <span className="material-icons">search</span>
                                </form>
                                
                                {
                                    handleVisible() && <MenuSearch />
                                }
                                
        
                            </div>
        
                        </div>
        
                        <div className="div__discover">
        
                            <span className="span__mostSearched">
                                <Link to="/topBreed"
                                      className="link__most">Most</Link> Searched Breeds</span>
        
                            <div className="div__discover__more">
                                <p className="p__breedsDiscover">66+ Breeds For you to discover</p>
                                <ReadMore link="/discover" />
                            </div>
                            
                            <DreedDiscover breeds={imgsMemo}/>
                                
                        </div>
        
                    </main>
        
                    <section className="section__questionCats">
        
                        <div className="div__question">
        
                            <span className="question">
                                Why should you have a cat?
                            </span>
        
                            <div className="div__p__info">
                                <p>
                                    Having a cat around you can actually trigger 
                                    the release of calming chemicals in your body which lower your stress and 
                                    anxiety leves
                                </p>
                            </div>
                            
                            <a className="link__see__more" 
                            href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
                            target="_blank"
                            rel="noreferrer">
                                <span className="span__see">READ MORE</span>
                                <span className="material-icons">arrow_right_alt</span>
                            </a>
                            
                        </div>
        
                        <div className="div__imgsCats">
        
                            <div className="div__imgs">
                                <div className="div__img2">
                                    <img src={imgCat2} alt="imgcat2" />
                                </div>
                                <div className="div__img1">
                                    <img src={imgCat1}  alt="imgcat1" />
                                </div>
                            </div>
        
                            <div className="div__img3">
                                <img src={imgCat3} alt="imgcat3"/>
                            </div>
        
                        </div>
        
                    </section>
        
                    <Footer />
                    </>
                )
            }

           
        </>
    )
}