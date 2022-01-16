import React, { useEffect, useState } from 'react';
import Items from '../products/Items';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSelector, isLoadingSelector } from '../store';
import { getFavoritesAsync } from '../store';

const Favorites = ({openDialog, changeDialogType}) => {
  const [limit, addOffset] = useState(12);
  const token = window.localStorage.getItem("token");

  const productsObject = useSelector(favoritesSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  
  const handleGetFavorites = () => {
    if (!token) {
        changeDialogType('continuedialog');
        openDialog(true);
    }
    dispatch(getFavoritesAsync(token));
  }
 
  useEffect(handleGetFavorites, [dispatch]);

  return (
    <>
      {
        isLoading && (
          <div className="loader"></div>
        )
      }
      {
        !isLoading && productsObject && (
            <Items openDialog={openDialog} productsObject={productsObject} />
        )
      }
       <button className="App-more-button" onClick={() => addOffset(limit + 12)}>Load more</button>
    </>  
  );  
}

export default Favorites;