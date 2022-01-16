import React, { useEffect } from 'react';
import Order from './Order';
import { useDispatch, useSelector } from 'react-redux';
import { ordersSelector, isLoadingSelector } from '../store';
import { getOrdersAsync } from '../store';

const History = ({openDialog, changeDialogType}) => {
  const ordersObject = useSelector(ordersSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  
  const handleGetOrders = () => {
    const token = window.localStorage.getItem("token");
    dispatch(getOrdersAsync(token));
  }
 
  useEffect(handleGetOrders, [dispatch]);

  return (
    <>
      {
        isLoading && (<div className="loader"></div>)
      }
      {
        !isLoading && ordersObject.length ?
          <ul count={ordersObject}>
            {ordersObject.map(order =>
              <Order key={order.id}
                     changeDialogType={changeDialogType}
                     openDialog={openDialog}
                     order={order}
              />)}       
          </ul>
        : <div>Currently you have no orders</div>  
      }  
    </>  
  );  
}

export default History;
