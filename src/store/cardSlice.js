import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
        let { data } = await axios.get('https://rickandmortyapi.com/api/character');
        return data;
    }
);

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload.results;
        })
    }
});

export default cardSlice.reducer;