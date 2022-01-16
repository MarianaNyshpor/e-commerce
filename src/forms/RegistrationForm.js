import React from 'react';
import FormField from './FormField';
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  const {fields, changeFieldValue, changeDialogType } = {...props};
  
  return (
      <div>
        <h3>Register</h3>
        <FormField
          fields={fields}
          required
          type="text"
          name="fullName"
          pattern="^[a-zA-Z\s]+$"
          placeholder="Full Name"
          changeFieldValue={changeFieldValue}/>
        <FormField
          fields={fields}
          required
          type="email"
          name="email"
          placeholder="Email"
          pattern="\S+@\S+"
          changeFieldValue={changeFieldValue}/>
        <FormField
          fields={fields}
          required
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="^(\+)?([0-9]){10,14}$"
          changeFieldValue={changeFieldValue}/>
        <FormField
          fields={fields}
          type="password"
          name="password"
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          changeFieldValue={changeFieldValue}/>
        <div>I already have an account, <Link className="App-text-orange" to="/login" onClick={() => changeDialogType('login')}>LogIn</Link></div>
        <button className="App-form-button" type="submit">Submit</button>
      </div>
  );
}

export default RegistrationForm;
