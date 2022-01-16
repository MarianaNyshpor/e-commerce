import React from 'react';
import './App.css';
import { Form } from '../forms';
import Notification from './Notification';
import { useSelector } from 'react-redux';
import { selectedItemSelector, userSelector } from '../store';
import SelectedItem from '../products/SelectedItem';
import ContinueDialog from './ContinueDialog';

export const PopUp = ({ closePopUp, dialogType, changeDialogType, handlePurchase, isPurchased, isNotification,  handleNotification}) =>{
  const user = useSelector(userSelector);
  const selectedItem = useSelector(selectedItemSelector);
  
  const handleClose = () => {
    handleNotification(false);
    handlePurchase(false);
    closePopUp();
  }

  return (
    <div className="App-popUpBox">
      <div className="App-button-close">
        <span onClick={handleClose}>x</span>
      </div>
      {
        isNotification || isPurchased ? <Notification handleNotification={handleNotification} changeDialogType={changeDialogType} isPurchased={isPurchased} handlePurchase={handlePurchase} closePopUp={closePopUp} /> :
        (
          user && selectedItem ? <SelectedItem handleNotification={handleNotification} closePopUp={closePopUp}/> : <Form handlePurchase={handlePurchase} closePopUp={closePopUp} dialogType={dialogType} changeDialogType={changeDialogType}/>
        )
      }
      {
        dialogType  === 'continuedialog' && (<ContinueDialog changeDialogType={changeDialogType} closePopUp={closePopUp}/>)
      }
    </div>
  ) 
}
