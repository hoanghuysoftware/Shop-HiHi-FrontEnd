import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        keyword: '',
    },
    reducers: {
        setSearch: (state, action) => {
            state.keyword = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
