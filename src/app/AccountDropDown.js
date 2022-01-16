import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, userSelector } from '../store';
import { IoMdArrowDropdown } from "react-icons/io";

const AccountDropDown = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [isDropdown, openDropdown] = useState(false);

  const handleLogOut = () => {
    if (user) {
      dispatch(setUser(null));
    }
    handleDropdownOnClick();
  }
  const handleDropdownOnClick = () => {
    openDropdown(!isDropdown);
  }
  
  return (
    <div className="App-nav-dropdown">
      <div onClick={() => handleDropdownOnClick()}><IoMdArrowDropdown /></div>
      <div className={isDropdown ? 'App-nav-dropdown-visible' : 'App-nav-dropdown-hidden'}>
        <div className="App-options">{user.account.fullName}</div>
        <div className="App-options">{user.account.email}</div>
        <div className="App-devider"></div>
        <Link className="App-dropdown-link" to="/account" onClick={() => handleDropdownOnClick()}>
            <div className="App-optionss">Settings</div>
        </Link>
        <div className="App-text-orange App-options" onClick={() => handleLogOut()}>Log out</div>
      </div>
    </div>
     
  );
}

export default AccountDropDown;