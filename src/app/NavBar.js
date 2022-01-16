import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import AccountDropDown from './AccountDropDown';
import { Link } from 'react-router-dom';
import { userSelector, cartItemsSelector } from '../store';
import { useSelector } from 'react-redux';
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { getInitials } from './getInitials';

const NavBar = ({openDialog, changeDialogType}) => {
  const user = useSelector(userSelector);
  const cart = useSelector(cartItemsSelector);
  
  return (
    <div className="App-header">
      <Link className="App-link" to="/"><Logo /></Link>
      <div className="App-nav">
        <div className="App-nav-icons App-nav">
        { user ? <Link className="App-link" to="/favorites"><FaHeart /></Link> : <div className="App-link"><FaHeart /></div>}
        { user
          ? <div className="App-nav"><Link className="App-link" to="/cart"><FaCartArrowDown /></Link><div className="App-link-number">{user.token && cart ? cart.length : ''}</div></div>
          : <div className="App-link"><FaCartArrowDown /></div>}</div> 
        {
          user && user.token ? <div className="App-nav App-link-number">{user.account.fullName}<div className="App-nav-initials App-link-number">{getInitials(user.account.fullName)}</div><AccountDropDown /></div> : <Login openDialog={openDialog} changeDialogType={changeDialogType}/>
        }
      </div>
    </div>
  )
}

export default NavBar;
