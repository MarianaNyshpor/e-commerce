import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsAsync } from '../store';
import { useFormFields } from '../forms/useFormFields';
import { FaSistrix } from "react-icons/fa";

const SearchInput = () => {
  const fieldsEmptyObject = {
    searchedText: ''
  }
      
  const dispatch = useDispatch();
  const {fields, changeFieldValue} = useFormFields(fieldsEmptyObject);
  const handleGetMovies = () => {
    if (fields.searchedText.length > 2) {
      const token = window.localStorage.getItem("token");
      dispatch(getProductsAsync(12, token, `/search?keywords=${fields.searchedText}`));
    }
  }
  
  useEffect(handleGetMovies, [dispatch, fields.searchedText]);

  return (
    <div className="App-search">
      <div className="App-search-icon">
        <FaSistrix />
      </div>
      <input className="App-input App-input-sort"
        type="search"
        id="searchedText"
        name="searchedText"
        value={fields.searchedText}
        onChange={changeFieldValue} />
    </div>  
  );  
}

export default SearchInput;
