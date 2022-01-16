import React, { useState } from 'react';
import Quantity from './Quantity';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector, getCartItemsAsync } from '../store';
import { changeFavoritesAsync } from '../store';

const SelectedItem = ({closePopUp, handleNotification}) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectedItemSelector);
  const [quantity, changeQuantity] = useState(1);

  const addItem = () => {
    const cart = JSON.parse(window.sessionStorage.getItem("cart"));
    const newCart = cart ? cart : [];
    const ids = [selectedItem.id, ...newCart];
   
    window.sessionStorage.setItem("cart", JSON.stringify(ids));
    window.sessionStorage.setItem("lastAddedItem", selectedItem.title);
    const token = window.localStorage.getItem("token");

    const cartIds = ids.map(id => `id=${id}&`);
    dispatch(getCartItemsAsync(token, cartIds.join('')));
  }
 
  const addToCart = () => {
    addItem();
    closePopUp();
    handleNotification(true); 
  }

  const addToFavorites = () => {
    if (!selectedItem.favorite) {
      const token = window.localStorage.getItem("token");
      dispatch(changeFavoritesAsync(token, 'POST', `${selectedItem.id}/`));
    }
  }

  return (
      <div className="App-dialog-item">
        <div className="App-dialog-item-information">
          <p className="App-dialog-item-image">
            <img alt="" src={selectedItem.picture}></img>
          </p>
        <div className="App-order-item-information">
          <div className="App-dialog-item-left">
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
          </div>
          <div>
            <div className="App-order-box">
              <p>PRICE</p>
              <p className="App-item-price">{selectedItem.price}</p>
            </div>
            <Quantity quantity={quantity} changeQuantity={changeQuantity} />
          </div>
          <div>
            <div className="App-order-box">
                <p>Items</p>
                <p className="App-item-price">{quantity}</p>
              </div>
              <div className="App-order-box">
                <p>Total</p>
                <p className="App-item-price">{selectedItem.price * quantity}</p>
              </div>
            </div>
          </div>   
      </div>
      <div className="App-dialog-buttons">
        <div>
          <button className="App-dialog-item-button" type="submit" onClick={() => addToCart()}>ADD TO CART</button>
          <button className="App-dialog-item-button" type="submit" onClick={() => addToFavorites()}>ADD TO FAVORITES</button>
          <button className="App-dialog-item-button-buy" type="submit" onClick={() => closePopUp()}>
            <Link className="App-item-button" to="/cart">BY NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedItem;
