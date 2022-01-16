import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector, setError } from '../store';

export const ErrorNotification = () =>{
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setError(''));
  }

  return (
    <div className="App-popUpBox">
      <div className="App-button-close">
        <span onClick={handleClose}>x</span>
      </div>
      <div>{error}</div>
    </div>
  ) 
}
