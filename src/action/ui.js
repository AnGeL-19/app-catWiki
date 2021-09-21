import { types } from "../types/types";

export const StartloadingPage = () => ({
    type: types.StartloadingUI
})

export const noStartLoadingPage = () => ({
    type: types.noStartloadingUI
})

export const loadingPage = () => ({
    type: types.loadingUI
})

export const noLoadingPage = () => ({
    type: types.noLoadingUI
})


export const searchBreed = (sname) => ({
    type: types.searchName,
    payload: sname
})

export const openMenuMobile = () => ({
    type: types.menuOpen
})

export const closeMenuMobile = () => ({
    type: types.closeMenu
})