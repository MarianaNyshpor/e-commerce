import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
    setFavorites,
    getOrders,
    setUserAccount,
    setError,
    setLogInToken, setRegistrationToken, getProducts, setLoading, setUser, getCategories, getSelectedItem, getCartItems } from './actions';

export const productsReducer = createReducer(initialState, {
    [setLogInToken]: (state, action) => {
        state.logInToken = action.payload;
    },
    [setRegistrationToken]: (state, action) => {
        state.registrationToken = action.payload;
    },
    [getProducts]: (state, action) => {
        state.products = action.payload;
    },
    [setLoading]: (state, action) => {
        state.isLoading = action.payload;
    },
    [setUser]: (state, action) => {
        state.user = action.payload;
    },
    [getCategories]: (state, action) => {
        state.categories = action.payload;
    },
    [getSelectedItem]: (state, action) => {
        state.selectedItem = action.payload;
    },
    [getCartItems]: (state, action) => {
        state.cartItems = action.payload;
    },
    [setFavorites]: (state, action) => {
        state.favorites = action.payload;
    },
    [getOrders]: (state, action) => {
        state.orders = action.payload;
    },
    [setUserAccount]: (state, action) => {
        state.user.account = action.payload;
    },
    [setError]: (state, action) => {
        state.error = action.payload;
    }
});