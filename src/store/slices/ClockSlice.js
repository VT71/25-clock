import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    breakL: 5,
    sessionL: 25,
};

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {},
});

export const {} = clockSlice.actions;

export default clockSlice.reducer;
