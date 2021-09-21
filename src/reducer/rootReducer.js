import { combineReducers } from "redux";
import { breedsReducer } from "./breedsReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    breeds: breedsReducer,
    ui: uiReducer
})