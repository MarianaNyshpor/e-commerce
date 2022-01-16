import React, { useEffect } from 'react';
import CartList from './CartList';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector, isLoadingSelector, userSelector } from '../store';
import { getCartItemsAsync } from '../store';
import { Form } from '../forms';

const Cart = ({openDialog, handlePurchase, changeDialogType}) => {
  const user = useSelector(userSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const cartObject = useSelector(cartItemsSelector);

  const getCart = () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      changeDialogType('continuedialog');
      openDialog(true);
    }
    
    const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartIds && cartIds.length) {
      const ids = cartIds.map(id => `id=${id}&`);
      dispatch(getCartItemsAsync(token, ids.join('')));
    }
  }

  useEffect(getCart, [dispatch]);

  return (
    <>
      <h3 className="App-cart-title">My Cart</h3>
      {
        isLoading && (<div className="loader"></div>)
      }
      {
        !isLoading && cartObject && (
          <div className="App-cart">
            <CartList cartObject={cartObject} openDialog={openDialog} />
            <Form handlePurchase={handlePurchase} dialogType="cart"/>
          </div>
        )
      }
    </>  
  );  
}

export default Cart;
