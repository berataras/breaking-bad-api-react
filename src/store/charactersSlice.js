import {createSlice} from "@reduxjs/toolkit";
import {fetchCharacters} from "./actions";

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        isLoading: false,
        page: 0,
        hasNextPage: true
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.isLoading = false;
            state.page += 1;
            if (action.payload.length < 12){
               state.hasNextPage = false;
            }
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = state.error.message;
        },
    }
})

export default charactersSlice.reducer;