import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItemsAsync } from '../store';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { getQuantity } from './getQuantity';

const CartItem = ({ item }) => {
  const {title, price, picture, id} = {...item};
  const [quantity, changeQuantity] = useState(getQuantity(id));
  const dispatch = useDispatch();

  const removeItem = () => {
    const cart = JSON.parse(window.sessionStorage.getItem("cart"));
    const newCart = cart ? cart : [];
    const ids = newCart.filter(item => item !== id);

    window.sessionStorage.setItem("cart", JSON.stringify(ids));
    const token = window.localStorage.getItem("token");
    const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
    
    const newIds = cartIds.map(id => `id=${id}&`);
    dispatch(getCartItemsAsync(token, newIds.join('')));
  }

  const increaseQuantity = () => {
    changeQuantity(quantity + 1);
    const cart = JSON.parse(window.sessionStorage.getItem("cart"));
    const newCart = cart ? cart : [];

    newCart.push(id);
    window.sessionStorage.setItem("cart", JSON.stringify(newCart));
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      changeQuantity(quantity - 1);
      const cart = JSON.parse(window.sessionStorage.getItem("cart"));
      const newCart = cart ? cart : [];
      const index = newCart.indexOf(id);

      newCart.splice(index, 1);
      window.sessionStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  return (
    <li className="App-cart-item-information">
      <p className="App-cart-item-image">
        <img alt="" src={picture}></img>
      </p>
      <div className="App-cart-item-field">
        <p className="App-cart-item-field-left">{title}</p>
        <div className="App-cart-item-field-left">
          <FaTrashAlt onClick={() => removeItem()} />
          <FiPlusCircle onClick={() => increaseQuantity()}/>
          {quantity}
          <FiMinusCircle onClick={() => decreaseQuantity()}/>
        </div>
      </div>
      <div className="App-cart-item-price">
        <p>Price </p>
        <p className="App-item-price">$ {price}</p>
      </div>
    </li> 
  );
}

export default CartItem;
