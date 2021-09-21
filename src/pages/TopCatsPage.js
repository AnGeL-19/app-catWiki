import React, { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { HeadCadWiki } from '../components/HeaderCadWiki'
import { TopBreeds } from '../components/toppage/TopBreeds'

export const TopCatsPage = () => {

    useEffect(() => {
        window.scrollTo( 0, 0 );
    }, [])

    return (
        <>
            
                
            <div className="div__container__breeds">

                <HeadCadWiki />

                <h2 className="h2__title__top">Top 10 most searched breeds</h2>

                <TopBreeds />


                <div className="footer__down">
                    <Footer />
                </div>
            </div>

            
        </>
    )
}
