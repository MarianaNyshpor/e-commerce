import React, { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import PurchaseDialog from './PurchaseDialog';

const Notification = ({isPurchased, handlePurchase, closePopUp, changeDialogType, handleNotification }) => {
  const location = useLocation();
  const [isDisplayNone, setDisplayNone] = useState(false);
  const title = window.sessionStorage.getItem("lastAddedItem");
  if (!isPurchased) {
    setTimeout(() => {
      handleNotification(false);
      changeDialogType('');
      setDisplayNone(true);
      closePopUp();
    }, 3000);
  }
  
  return (
    <>
      {
        isPurchased ? <PurchaseDialog handlePurchase={handlePurchase} closePopUp={closePopUp}/>
          : (location.pathname === "/account" ? 
                <div className={isDisplayNone ? "App-display-none" : "App-notification"}>Account was successfully changed</div>
              : <div className={isDisplayNone ? "App-display-none" : "App-notification"}>The {title} is successfully added to cart</div> 
          )
      }
    </>
  )
}

export default Notification;
