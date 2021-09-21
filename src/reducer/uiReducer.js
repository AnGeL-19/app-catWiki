import { types } from "../types/types";

const initialState = {

    loadingUi: false,
    nameSearch: '',
    startLoading: false,
    menuOpen: false

}

export const uiReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.loadingUI:
            return {
                ...state,
                loadingUi: true
            }
        case types.noLoadingUI:
            return {
                ...state,
                loadingUi: false
            }
        case types.StartloadingUI:
            return {
                ...state,
                startLoading: true
            }
        case types.noStartloadingUI:
            return {
                ...state,
                startLoading: false
            }
        case types.searchName:
            return {
                ...state,
                nameSearch: action.payload
            }
        case types.menuOpen:
            return {
                ...state,
                menuOpen: true
            }
        case types.closeMenu:
            return {
                ...state,
                menuOpen: false
            }
        default:
            return state;
    }
}
