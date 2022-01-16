import React from 'react';
import { Link } from 'react-router-dom';

const ContinueDialog = ({changeDialogType, closePopUp}) => {
  const handleClick = (type) => {
    changeDialogType(type);
    if (type === '') {
        closePopUp();
    }
  }
  
  return (
    <div className="App-cart-buttons">
      <button className="App-cart-item-button-buy" onClick={() => handleClick('login')}>
        <Link to="/login">Continue to sign in</Link>
      </button>
      <button className="App-cart-item-button" onClick={() => handleClick('register')}>
        <Link to="/registration">Continue to register</Link>
      </button>
      <button className="App-cart-item-button" onClick={() => handleClick('')}>
        <Link to="/">Continue as a gest</Link>
      </button>
    </div>
  )
}

export default ContinueDialog;
