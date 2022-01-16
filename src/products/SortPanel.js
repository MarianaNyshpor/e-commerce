import React, { useEffect } from 'react';
import DropDown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../store';
import { useFormFields } from '../forms/useFormFields';
import { sortingObject } from '../constants';
import { categoriesSelector, getProductsByCategoryAsync } from '../store';
import SearchInput from './SearchInput';

const SortPanel = ({ text }) => {
  const categories = useSelector(categoriesSelector);
  const fieldsEmptyObject = {
    category: null,
    option: ''
  }
    
  const dispatch = useDispatch();
  const {fields, changeFieldValue} = useFormFields(fieldsEmptyObject);
  const handleGetMovies = () => {
    const token = window.localStorage.getItem("token");
    if (fields.category) {
      dispatch(getProductsByCategoryAsync(fields.category, token));
    }
    if (fields.option) {
      dispatch(getProductsAsync(12, token, `?sortBy=${fields.option}`));
    }
  }
  
  useEffect(handleGetMovies, [dispatch, fields.category, fields.option]);

  return (
    <div className="App-search-panel">
      <SearchInput />
      <DropDown dropdownObject={categories} changeFieldValue={changeFieldValue} name="category" placeholder="Choose category"/>
      <DropDown dropdownObject={sortingObject} changeFieldValue={changeFieldValue} name="option" placeholder="Sorting"/>
    </div>  
  );  
}

export default SortPanel;
