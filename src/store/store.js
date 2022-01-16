import { configureStore } from "@reduxjs/toolkit";
import { initialState } from './initialState';
import { productsReducer } from './reducers';

export const store = configureStore({
    reducer: productsReducer,
    preloadedState: initialState
});
