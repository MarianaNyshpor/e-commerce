import React from 'react';
import { FaListAlt } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";

const DropDown = ({ dropdownObject, name, changeFieldValue, placeholder }) => {

  return (
    <div className="App-search">
      <div className="App-search-icon">
        {
          name === "category" ? <FaListAlt /> : <BsBookmarkFill />
        }
      </div>
      <select className="App-input App-input-sort" id={name} name={name} onChange={changeFieldValue}>
        {dropdownObject.map(item =>
          <option className="App-options" key={item.name} value={item.id}>{item.name}</option>)}
      </select>
    </div>  
  );  
}

export default DropDown;
