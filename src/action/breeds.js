

import { getInfoCatFetch } from "../helpers/infoFetch";

import { popularBreeds, } from "../helpers/popularBreeds";
import { types } from "../types/types";
import { loadingPage, StartloadingPage } from "./ui";


export const getAllBreeds = () => {
    return async(dispatch) => {

        try{

            const body = await getInfoCatFetch('https://api.thecatapi.com/v1/breeds');
            const resp = await body.json();

            
            dispatch(setInfoBreeds(resp));
            dispatch(popularBreed(popularBreeds(resp)));
            dispatch(StartloadingPage());


        }catch(err){
            console.log(err);
        }

    }

}

export const getBreed = (id) => {
    return async(dispatch) => {

        try{

            const body = await getInfoCatFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8`);
            const resp = await body.json();

            const objBreed = {
                breed: resp[0].breeds[0],
                imgs: resp.map( r => r.url)
            }
            
            await dispatch(activeBread(objBreed));
            dispatch(loadingPage());

        }catch(err){
            console.log(err);
        }

    }

}

const setInfoBreeds = (breeds) => ({
    type: types.setInfoBreeds,
    payload: breeds
})


const popularBreed = (breeds) => ({
    type: types.setPopularBreeds,
    payload: breeds
})

const activeBread = (breed) => ({
    type: types.activeBreed,
    payload: breed
})

export const cleanBreedActivated = () => ({
    type: types.cleanInfoBreed
})