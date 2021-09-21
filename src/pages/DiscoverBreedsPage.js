import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DiscoverAllBreeds } from '../components/discoverBreedspage/DiscoverAllBreeds'
import { Footer } from '../components/Footer'
import { HeadCadWiki } from '../components/HeaderCadWiki'


export const DiscoverBreedsPage = () => {

    const { allBreeds } = useSelector(state => state.breeds);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <HeadCadWiki />

                <h2>Discover Breeds</h2>
            
                <DiscoverAllBreeds breeds={allBreeds} />

            <Footer />
        </>
    )
}
