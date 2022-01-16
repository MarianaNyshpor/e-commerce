import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Products from '../products/Products';
import Account from '../account/Account';
import Cart from '../cart/Cart';
import { Route, Switch } from 'react-router-dom';
import { PopUp } from './PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedItem, errorSelector, getAccountAsync } from '../store';
import { ErrorNotification } from './ErrorNotification';
import Favorites from '../account/Favorites';
import History from '../account/History';

export const App = () => {
  const [dialogType, setDialogType] = useState('');
  const [isPopUpOpened, openPopUp] = useState(false);
  const [isPurchased, purchase] = useState(false);
  
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);

  const [isNotification, openNotification] = useState(false);
  
  const handleNotification = (isNotification) => {
    openNotification(isNotification);
    if (isNotification) {
      openPopUp(true);
    } 
  }

  const handlePurchase = (isPurchased) => {
    purchase(isPurchased);
    openPopUp(true);
  }

  const handlePopUp = (isPopUpOpened) => {
    openPopUp(isPopUpOpened);
  }

  const closePopUp = () => {
    openPopUp(false);
    dispatch(getSelectedItem(null));
  }

  const changeDialogType = type => {
    setDialogType(type);
  }

  const getUser = () => {
    const token = window.localStorage.getItem("token");
    dispatch(getAccountAsync(token));
  }
  
  useEffect(getUser, [dispatch]);

  return (
    <div className="App-main">
      {
        <>
          <NavBar openDialog={handlePopUp} changeDialogType={changeDialogType}/>
          <Switch>
            <Route path="/" exact render={() => <Products openDialog={handlePopUp} changeDialogType={changeDialogType}/>}>
            </Route>
            <Route path="/login" render={() => <Products openDialog={handlePopUp} changeDialogType={changeDialogType}/>}>
            </Route>
            <Route path="/register" render={() => <Products openDialog={handlePopUp} changeDialogType={changeDialogType}/>}>
            </Route>
            <Route path="/favorites" render={() => <Favorites openDialog={handlePopUp} changeDialogType={changeDialogType}/>}>
            </Route>
            <Route path="/cart" render={() => <Cart handlePurchase={handlePurchase} openDialog={handlePopUp} changeDialogType={changeDialogType}/>}>
            </Route>
            <Route path="/account" render={() => <Account handleNotification={handleNotification} isNotification={isNotification} changeDialogType={changeDialogType} openDialog={handlePopUp} />}>
            </Route>
            <Route path="/history" render={() => <History changeDialogType={changeDialogType} openDialog={openPopUp} />}>
            </Route>
          </Switch>
          <Footer />
        </>
      }
      {
        isPopUpOpened && (
          <PopUp
            handleNotification={handleNotification}
            isNotification={isNotification}
            isPurchased={isPurchased}
            handlePurchase={handlePurchase}
            openDialog={handlePopUp} closePopUp={closePopUp} dialogType={dialogType} changeDialogType={changeDialogType}/>
        )
      }
      {
        error && (<ErrorNotification />)
      }
    </div>
  )
}

export default App;
