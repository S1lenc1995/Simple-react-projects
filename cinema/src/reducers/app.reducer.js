import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    currentFilm: {},
    modal: false,
};

const appSlice = createSlice({
    name:"app",
    initialState,
    reducers: {
        actionFavorites: (state, {payload}) => {
            state.favorites = [...state.favorites,payload]
        },
        actionCurrentFilm: (state, {payload}) => {
            state.currentFilm = {...payload}
        },
        actionModal: (state, {payload}) =>{
            state.modal = payload;
        }
    }
})

export const {actionFavorites, actionCurrentFilm, actionModal} = appSlice.actions;

export default appSlice.reducer;