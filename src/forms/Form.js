import React from 'react';
import RegistrationForm from './RegistrationForm';
import LogInForm from './LogInForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAsync, getUserAccountAsync, userSelector, createOrdersAsync, cartItemsSelector, editUserAccountAsync } from '../store';
import { useFormFields } from './useFormFields';
import CartForm from './CartForm';
import ContinueDialog from '../app/ContinueDialog';
import { getItems } from './getItems';
import OrderDialog from '../account/OrderDialog';
import ChangePasswordForm from './ChangePasswordForm';
import MainInformationForm from './MainInformationForm';

export const Form = ({ closePopUp, dialogType, changeDialogType, handlePurchase, handleNotification}) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
  const emptyObject = {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    oldPassword: '',
    confirmedPassword: ''
  }

  const emptyObjectAccount = {
    email: user && user.account ? user.account.email : '',
    password: '',
    fullName: user && user.account ? user.account.fullName : '',
    phone: user && user.account ? user.account.phone : '',
    address: user && user.account && user.account.address ? user.account.address : '',
    city: user && user.account && user.account.city ? user.account.city : '',
    country: user && user.account && user.account.country ? user.account.country : 'Ukraine',
    oldPassword: '',
    confirmedPassword: ''
  }

  const fieldsEmptyObject = (dialogType === 'mainInformation' || dialogType === 'cart') ? emptyObjectAccount : emptyObject;
  const {fields, changeFieldValue} = useFormFields(fieldsEmptyObject);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToken = window.localStorage.getItem("token");
    if (dialogType === 'login') {
      dispatch(getUserAccountAsync({
        email: fields.email,
        password: fields.password,
      }));
      changeDialogType('');
      closePopUp();
    }

    if (dialogType === 'mainInformation') {
      dispatch(editUserAccountAsync(userToken, {
        country: fields.country,
        address: fields.address,
        city: fields.city,
        fullName: fields.fullName,
        phone: fields.phone,
        email: fields.email
  
      }));
      handleNotification(true);
    }
    if (dialogType === 'changePassword') {
      if (fields.confirmedPassword === fields.password) {
        dispatch(editUserAccountAsync(userToken, {
          oldPassword: fields.oldPassword,
          password: fields.password,
        }, 'password')); 
      }
    }
    
    if (dialogType === 'register') {
      dispatch(getUserAsync({
        email: fields.email,
        password: fields.password,
        fullName: fields.fullName,
        phone: fields.phone,
  
      }));
      closePopUp();
    }

    if (dialogType === 'cart') {
      const items = getItems(cartItems, cartIds);
      const shipment = {
        country: fields.country,
        address: fields.address,
        city: fields.city,
        fullName: fields.fullName,
        phone: fields.phone,
      };
      dispatch(createOrdersAsync(userToken, items, shipment));
      handlePurchase(true);
    }
    
    fields.email = '';
    fields.password = '';
    fields.fullName = '';
    fields.phone = '';
    fields.city = '';
    fields.address = '';
    fields.country = '';
    fields.confirmedPassword = '';
    fields.oldPassword= '';
  }
 
  return (
    <form className="App-form" onSubmit={handleSubmit}>
      {dialogType === 'login' && (<LogInForm fields={fields} changeFieldValue={changeFieldValue} changeDialogType={changeDialogType}/>)
      }
      {
        dialogType === 'register' && (<RegistrationForm fields={fields} changeFieldValue={changeFieldValue} changeDialogType={changeDialogType} />)
      } 
      {
        dialogType === 'cart' && (<CartForm fields={fields} changeFieldValue={changeFieldValue} />)
      }
      {
        dialogType === 'continueDialog' && (<ContinueDialog changeDialogType={changeDialogType} closePopUp={closePopUp} />)
      }
      {
        dialogType === 'order' && (<OrderDialog closePopUp={closePopUp}/>)
      }
      {
        dialogType === 'mainInformation' && (<div><MainInformationForm fields={fields} changeFieldValue={changeFieldValue} /><button className="App-form-button" type="submit">Save</button></div>)
      }
      {
        dialogType === 'changePassword' && (<ChangePasswordForm fields={fields} changeFieldValue={changeFieldValue} />)
      }
    </form> 
  );
}
