import { createAction } from '@reduxjs/toolkit';
import { URL } from '../constants';

export const getProducts = createAction('products/get');
export const getCartItems = createAction('cartItems/get');
export const setLoading = createAction('loading/set');
export const setUser = createAction('user/set');
export const setLogInToken = createAction('logInToken/set');
export const setRegistrationToken = createAction('registrationToken/set');
export const getCategories = createAction('categories/get');
export const getSelectedItem = createAction('item/get');
export const setFavorites = createAction('favorites/set');
export const getOrders = createAction('orders/get');
export const setUserAccount = createAction('account/set');
export const setError = createAction('error/set');

export const getProductsAsync = (payload, token, params) => async (dispatch) => {
  const url = params ? `${URL.products}${params}&offset=0&limit=${payload}` : `${URL.products}?offset=0&limit=${payload}`;
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getProducts(results));
            if (results.error) {
              dispatch(setError(results.error));
            }
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getUserAsync = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
      await fetch(URL.register, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then((results) => {
          dispatch(setUser(results));
          dispatch(getProductsAsync(12, results.token));
          window.localStorage.setItem('token', results.token);
          if (results.error) {
            dispatch(setError(results.error));
          }
          dispatch(setLoading(false));
      })
    } catch(err) {
      console.log(`Request Error: Failed with status code: ${err}`);
      dispatch(setLoading(false));
      return;
    }     
}

export const getUserAccountAsync = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
      await fetch(URL.login, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then((results) => {
          dispatch(setUser(results));
          dispatch(getProductsAsync(12, results.token));
          window.localStorage.setItem('token', results.token);
          if (results.error) {
            dispatch(setError(results.error));
          }
          dispatch(setLoading(false));
      })
    } catch(err) {
      console.log(`Request Error: Failed with status code: ${err}`);
      
      dispatch(setLoading(false));
      return;
    }     
}

export const editUserAccountAsync = (token, payload, params) => async (dispatch) => {
  const url = params ? `${URL.account}/${params}` : `${URL.account}`;
  dispatch(setLoading(true));
  try {
      await fetch(url, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",  "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then((results) => {
          if (!params) {
            dispatch(setUserAccount(results));
          }
          if (results.error) {
            dispatch(setError(results.error));
          }
          dispatch(setLoading(false));
      })
    } catch(err) {
      console.log(`Request Error: Failed with status code: ${err}`);
      dispatch(setLoading(false));
      return;
    }     
}

export const changeFavoritesAsync = (token, methode, payload) => async (dispatch) => {
  const url = `${URL.products}/${payload}favorite`;
    dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: methode,
          headers: { "Authorization": `Bearer ${token}` }
        })
        .then(() => {
          dispatch(getProductsAsync(12, token));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(setLoading(true));
    try {
        await fetch(URL.categories, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getCategories(results));
            if (results.error) {
              dispatch(setError(results.error));
            }
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getProductsByCategoryAsync = (id, token) => async (dispatch) => {
  const url = `${URL.categories}/${id}/products`;
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getProducts(results));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getSelectedItemAsync = (id, token) => async (dispatch) => {
  const url = `${URL.products}/${id}`;
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getSelectedItem(results));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getCartItemsAsync = (token, ids) => async (dispatch) => {
  const url = `${URL.products}/ids?${ids}`;
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getCartItems(results));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const createOrdersAsync = (token, items, shipment) => async (dispatch) => {
  const payload = {
    items,
    shipment
  };
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(URL.orders, {
          method: "POST",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getFavoritesAsync = (token) => async (dispatch) => {
  const url = `${URL.products}/favorites?sortBy=latest`;
    dispatch(setLoading(true));
    try {
        await fetch(url, {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        })
        .then(response => response.json())
        .then((result) => {
          dispatch(setFavorites(result));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getOrdersAsync = (token) => async (dispatch) => {
  const headerToken = token ? token : '';
  dispatch(setLoading(true));
    try {
        await fetch(URL.orders, {
          method: "GET",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${headerToken}` }
        })
        .then(response => response.json())
        .then((results) => {
            dispatch(getOrders(results));
            dispatch(setLoading(false));
        })
      } catch(err) {
        console.log(`Request Error: Failed with status code: ${err}`);
        dispatch(setLoading(false));
        return;
      }     
}

export const getAccountAsync = (token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
      await fetch(URL.account, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",  "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then((results) => {
        const user = {
          token,
          account: results
        }
        dispatch(setUser(user));
        if (results.error) {
          dispatch(setError(results.error));
        }
        dispatch(setLoading(false));
      })
    } catch(err) {
      console.log(`Request Error: Failed with status code: ${err}`);
      dispatch(setLoading(false));
      return;
    }     
}
