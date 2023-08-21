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
            console.log(action.payload);
            state.cards = action.payload;
        })
    }
});

export default cardSlice.reducer;