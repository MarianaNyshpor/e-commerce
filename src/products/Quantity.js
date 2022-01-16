import React from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const Quantity = ({quantity, changeQuantity}) => {
  const increaseQuantity = () => {
    changeQuantity(quantity + 1);  
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      changeQuantity(quantity - 1);
    }
  }

  return (
    <div className="App-item-price App-dialog-item-left">
      <FiPlusCircle onClick={() => increaseQuantity()}/>
        {quantity}
      <FiMinusCircle onClick={() => decreaseQuantity()}/>
    </div>
  );
}

export default Quantity;
