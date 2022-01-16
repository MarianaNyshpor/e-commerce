import React, { useEffect, useState } from 'react';
import Items from './Items';
import SortPanel from './SortPanel';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector, isLoadingSelector } from '../store';
import { getProductsAsync, getCategoriesAsync, getCartItemsAsync } from '../store';

const List = ({ openDialog, changeDialogType }) => {
  const token = window.localStorage.getItem("token");
  const [limit, addOffset] = useState(12);
  
  const productsObject = useSelector(productsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  
  const handleGetProducts = () => {
    dispatch(getProductsAsync(limit));
  }

  const getCategories = () => {
    dispatch(getCategoriesAsync());
  }

  const getCart = () => {
    const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartIds && cartIds.length) {
      const ids = cartIds.map(id => `id=${id}&`);
      dispatch(getCartItemsAsync(token, ids.join('')));
    }
  }

  useEffect(handleGetProducts, [dispatch, limit]);

  useEffect(getCategories, [dispatch]);

  useEffect(getCart, [dispatch]);

  return (
    <>
      <SortPanel text="text" />
      {
        isLoading && (<div className="loader"></div>)
      }
      {
        !isLoading && productsObject && (
            <Items productsObject={productsObject} openDialog={openDialog} changeDialogType={changeDialogType}/>
        )
      }
      {
        productsObject.length > 12 && (<button className="App-more-button" onClick={() => addOffset(limit + 12)}>Load more</button>)
      }
    </>  
  );  
}

export default List;
