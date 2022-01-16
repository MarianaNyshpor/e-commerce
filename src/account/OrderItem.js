import React from 'react';

const OrderItem = ({ item }) => {
  return (
    <li className="App-order-item" key={item.id}>
      <div className="App-order-item-information">
        <p className="App-item-image">
            <img alt="" src={item.product.picture} width="100" height="100"></img>
        </p>
      </div>
      <div className="App-order-item-information">
        <p className="App-SecondHeader">{item.product.title}</p>
        <div className="App-order-box">
          <p>Items </p>
          <p className="App-item-price">{item.quantity}</p>
        </div>
      </div>
      <div className="App-order-item-information">
        <p>Price </p>
        <p className="App-item-price">{item.orderedPrice}</p>
      </div>
    </li> 
  );
}

export default  OrderItem;
