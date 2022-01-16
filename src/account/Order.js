import React from 'react';

const Order = ({ openDialog, order, changeDialogType }) => {

  const handleOnClick = () => {
    window.sessionStorage.setItem("order", JSON.stringify(order));
    changeDialogType('order');
    openDialog(true);
  }

  return (
    <li className="App-order-item" onClick={handleOnClick}>
      <div className="App-order-item-information">
        <div className="App-order-box">
          <p>Order ID: </p>
          <p className="App-item-price">{order.id}</p>
        </div>
        <div className="App-order-box">
          <p>Date: </p>
          <p className="App-item-price">{order.createdAt}</p>
        </div>
      </div>
      <div className="App-order-item-information">
        <div className="App-order-box">
          <p>Price: </p>
          <p className="App-item-price">{order.totalPrice}</p>
        </div>
      </div>
    </li> 
  );
}

export default Order;
