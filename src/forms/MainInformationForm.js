import React from 'react';
import FormField from './FormField';
import { countryObject } from '../constants';

const MainInformationForm = (props) => {
  const {fields, changeFieldValue } = {...props};
  
  return (
      <div className="">
        <label htmlFor="fullName">Full Name</label>
        <FormField
          fields={fields}
          type="text"
          name="fullName"
          changeFieldValue={changeFieldValue}/>
        <label htmlFor="email">Phone Number</label>
        <FormField
          fields={fields}
          type="email"
          name="email"
          placeholder="Email"
          pattern="\S+@\S+"
          changeFieldValue={changeFieldValue}/>
        <label htmlFor="phone">Phone Number</label>
        <FormField
          fields={fields}
          type="tel"
          name="phone"
          changeFieldValue={changeFieldValue}/>
        <label htmlFor="country">Country</label>
          <div>
            <select className="App-form-select" id="country" name="country" onChange={changeFieldValue}>
              {countryObject.map(item =>
                <option key={item.name} value={item.name}>{item.name}</option>)}
            </select>
          </div>
        <label htmlFor="city">City</label>
        <FormField
          fields={fields}
          type="text"
          name="city"
          changeFieldValue={changeFieldValue}/>
        <label htmlFor="address">Address</label>
        <FormField
          fields={fields}
          type="text"
          name="address"
          changeFieldValue={changeFieldValue}/>
      </div>
  );
}

export default MainInformationForm;
