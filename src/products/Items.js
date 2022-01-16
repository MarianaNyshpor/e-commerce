import React, { useState } from 'react';
import Item from './Item';

const Items = ({ productsObject, openDialog, changeDialogType }) => {
  const [page, getPage] = useState(1);
  
  return (   
    <div className="App-list-section">
     {
       (productsObject && productsObject.length > 0) ?
         <ul page={page}
             className="App-list-wrapper"
             count={productsObject}>
               {productsObject.map(product =>
                 <Item key={product.id}
                      changeDialogType={changeDialogType}
                      openDialog={openDialog}
                      product={product} />)}   
          </ul>
       : <div>
           <h1>No Results Found</h1>
           <div>We did not find any article that matches this search. Make sure that the search text
            is entered correctly. Try using other search creteria.
           </div>
         </div>
      } 
    </div>
  )  
}

export default Items;
