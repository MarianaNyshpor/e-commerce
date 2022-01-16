import React from 'react';
import List from './List.js';

const Products = ({openDialog, changeDialogType}) => {
  return (
      <List openDialog={openDialog} changeDialogType={changeDialogType}/>
  )
}

export default Products;
