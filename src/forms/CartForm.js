import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../store';
import { getTotalPrice } from './getTotal';
import MainInformationForm from './MainInformationForm';

const CartForm = (props) => {
  const {fields, changeFieldValue } = {...props};
  const items = useSelector(cartItemsSelector);
  const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
  const total = getTotalPrice(items, cartIds);
  
  return (
    <>
      {
        cartIds && cartIds.length > 0 ? <div><MainInformationForm fields={fields} changeFieldValue={changeFieldValue}/>   
          <div className="App-cart-box">
            <div>Items</div>
              <div className="App-item-price">{items.length}</div>
            </div>
            <div className="App-cart-box">
                <div>Total</div>
                <div className="App-item-price">$ {total}</div>
            </div>
            <div className="App-cart-buttons">
              <button className="App-cart-item-button-buy" type="submit" disabled={cartIds.length < 1}>Confirm the purchase</button>
              <button className="App-cart-item-button" type="submit">
                <Link className="App-cart-item-button-link" to="/">continue shopping</Link>
              </button>
          </div>   
        </div> : <div>There are no items in a cart</div>
        }
    </>   
  );
}

export default CartForm;
