import React from 'react';
import '../app/App.css';
import { FaHeart } from "react-icons/fa";
import { changeFavoritesAsync } from '../store';
import { useDispatch } from 'react-redux';

const Icon = ({favorite, id}) => {
  const dispatch = useDispatch();
  const toggleBackgroundChange = e => {
    const token = window.localStorage.getItem("token");
    const methode = favorite ? 'DELETE' : 'POST';
    dispatch(changeFavoritesAsync(token, methode, `${id}/`));
    e.stopPropagation();
  }
  return (
    <>
      <button className={favorite ? 'App-item-icon-favorite' : 'App-item-icon'} onClick={(e) => toggleBackgroundChange(e)}>
        <FaHeart />
      </button>
    </>
  );
}

export default Icon;
