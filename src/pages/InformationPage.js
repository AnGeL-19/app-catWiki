import React, { useEffect} from 'react'
import { Footer } from '../components/Footer'
import { HeadCadWiki } from '../components/HeaderCadWiki';
import { PhotosCats } from '../components/informationpage/PhotosCats';
import { SkillStats } from '../components/informationpage/SkillStats';

import '../styles/informationPage/skillStats.scss';
import '../styles/informationPage/photosCats.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { useParams } from 'react-router';
import { getBreed } from '../action/breeds';

export const InformationPage = () => {

    const {activeBreed} = useSelector(state => state.breeds);
    const {loadingUi} = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        
        window.scrollTo( 0, 0 );
        dispatch(getBreed(id));
        
    }, [dispatch,id])

    
    return (
        <>
        
        {
            loadingUi
            ?
            <>
            <HeadCadWiki />

                <div className="div__img__info">

                    <div className="div__img__cat">
                        <img src={activeBreed.imgs[0]} alt={activeBreed.breed.name} />
                    </div>

                    <div className="div__infomation__cat">

                        <h2 className="h2__name__cat">{activeBreed.breed.name}</h2>

                        <p className="information">
                            {activeBreed.breed.description}
                        </p>

                        <div className="div__info__statistics">
                            <div className="info__statistics">
                                <span><b>Temperament:</b> {activeBreed.breed.temperament}</span>
                            </div>
                            <div className="info__statistics">
                                <span><b>Origin:</b> {activeBreed.breed.origin}</span>
                            </div> 
                            <div className="info__statistics">
                                <span><b>Life Span:</b> {activeBreed.breed.life_span} years</span>
                            </div>
                            <div className="info__statistics">
                                <div className="statistics">
                                    <span><b>Adaptability:</b></span> 
                                    <SkillStats stat={activeBreed.breed.adaptability}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Affection level:</b></span> 
                                    <SkillStats stat={activeBreed.breed.affection_level}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Child Friendly:</b></span> 
                                    <SkillStats stat={activeBreed.breed.child_friendly}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Grooming:</b></span> 
                                    <SkillStats stat={activeBreed.breed.grooming}/>
                                </div>
                                <div className="statistics">
                                    <span><b>Intelligence:</b></span> 
                                    <SkillStats stat={activeBreed.breed.intelligence}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Health issues:</b></span> 
                                    <SkillStats stat={activeBreed.breed.health_issues}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Social needs:</b></span> 
                                    <SkillStats stat={activeBreed.breed.social_needs}/>
                                </div>   
                                <div className="statistics">
                                    <span><b>Stranger friendly:</b></span> 
                                    <SkillStats stat={activeBreed.breed.stranger_friendly}/>
                                </div>   
                            </div>
                        </div>
                    </div>

                </div>

                <div className="div_imgs_cat">
                    
                    <h2 className="h2__title__photos">Other photos</h2>

                    <PhotosCats images={activeBreed.imgs}/>

                </div>

            <Footer />
            </>
            :
            <Loading />
        }
        </>
    )
}
