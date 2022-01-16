import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Login = ({ openDialog, changeDialogType }) => {
  const handleOnClick = type => {
    changeDialogType(type);
    openDialog(true)
  }
  return (
    <div className="App-nav">
        <Link className="App-link" to="./register" onClick={() => handleOnClick('register')}>Register</Link>
        <div className="App-nav-devider">|</div>
        <Link className="App-link" to="./login" onClick={() => handleOnClick('login')}>Login</Link>
    </div>
  )
}

export default Login;
