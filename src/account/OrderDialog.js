import React from 'react';
import OrderItem from './OrderItem';

const OrderDialog = () => {
  const order = JSON.parse(window.sessionStorage.getItem("order"));
  
  return (
    <div>
      <h3>Order Details ID {order.id}</h3>
      {
        <ul>
          {order.items.map(item =>
            <OrderItem key={item.product.id}
                       item={item}
            />)}        
        </ul>
      }
      <div className="App-order-item-box">
        <div className="App-order-item-information">
          <div className="App-order-box">
            <p>Date </p>
            <p className="App-item-price">{order.createdAt}</p>
          </div>
          <div className="App-order-box">
            <p>Address </p>
            <p className="App-item-price">{order.shipment.address}</p>
          </div>
        </div>
        
        <div className="App-order-item-information">
          <div className="App-order-box">
            <p>Items </p>
            <p className="App-item-price">{order.items.length}</p>
          </div>
          <div className="App-order-box">
            <p>Total </p>
            <p className="App-item-price">{order.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDialog;
