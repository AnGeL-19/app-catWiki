import { types } from "../types/types";

const initialState = {

    allBreeds: null,
    popularBreed: null,
    activeBreed: null

}

export const breedsReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.setInfoBreeds:
            return {
                ...state,
                allBreeds: action.payload
            }
        case types.setPopularBreeds:
            return {
                ...state,
                popularBreed: action.payload
            }
        case types.activeBreed:
            return {
                ...state,
                activeBreed: action.payload
            }
        case types.cleanInfoBreed:
            return {
                ...state,
                activeBreed: null
            }
        default:
            return state;
    }

}