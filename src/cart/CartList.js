import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cartObject }) => {
  return (
    <div className="App-cart-list">
      {
        cartObject && cartObject.length && (
          <ul>
            {cartObject.map(item =>
              <CartItem key={item.id} item={item} />)}
          </ul>
        )
      }
    </div>  
  );  
}

export default CartList;
