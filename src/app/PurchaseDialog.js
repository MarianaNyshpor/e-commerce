import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseDialog = ({handlePurchase, closePopUp}) => {
  const handleClick = () => {
    handlePurchase(false);
    closePopUp();
  }
  return (
    <div className="App-notification">
    <h2>Thank you for your purchase</h2>
    <div>We wlill send you a notification when your order arrives to you</div>
    <div className="App-cart-buttons">
      <button className="App-cart-item-button-buy App-purchase-button" onClick={() => handleClick()}>
        <Link to="/history">View Order History</Link>
      </button>
      <button className="App-cart-item-button App-purchase-button" onClick={() => handleClick()}>
        <Link to="/">Go Home</Link>
      </button>
      </div>
    </div>
  )
}

export default PurchaseDialog;
