import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../store/slices/ClockSlice';

const store = configureStore({
    reducer: { clock: clockReducer },
});

export default store;
