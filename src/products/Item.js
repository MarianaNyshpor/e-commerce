import React from 'react';
import Icon from './Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedItemAsync } from '../store';
import { userSelector } from '../store';

const Item = ({openDialog, product, changeDialogType}) => {
  const user = useSelector(userSelector);
  const {title, price, picture, id, favorite} = {...product};
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (user && user.account) {
      dispatch(getSelectedItemAsync(id, user.token));
    } else {
      changeDialogType('continueDialog');
    }
    openDialog(true);
  }

  return (
    <li  className="App-item"  onClick={() => handleOnClick()}>
      <p className="App-item-image">
        <img alt="" src={picture} width="100" height="100"></img>
        <Icon favorite={favorite} id={id}/>
      </p>
      <div className="App-item-title">
        <p>{title}</p>
        <p className="App-item-price">$ {price}</p>
      </div>
    </li> 
  );
}

export default Item;
