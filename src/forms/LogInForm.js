import React, { useState } from 'react';
import FormField from './FormField';
import { Link } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = (props) => {
  const {fields, changeFieldValue, changeDialogType } = {...props};
  const [isVisible, changeVisibility] = useState(false);
  
  return (
    <div>
      <h3>Login</h3>
      <FormField
        fields={fields}
        type="email"
        name="email"
        placeholder="Email"
        pattern="\S+@\S+"
        changeFieldValue={changeFieldValue}/>
      <FormField
        fields={fields}
        className="App-password-input"
        type={isVisible ? "text" : "password"}
        name="password"
        placeholder="Password"
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?\&])[A-Za-z\d@$!%*#?\&]"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        changeFieldValue={changeFieldValue}/>
      <div className="App-eye-icon" onClick={() => changeVisibility(!isVisible)}>
          {
            isVisible ? <FaEye /> : <FaRegEyeSlash />
          }
      </div>
      <button className="App-form-button" type="submit">Login</button>
      <div>I have no account, <Link className="App-text-orange" to="/register" onClick={() => changeDialogType('register')}>Register now</Link></div>
    </div>
  );
}

export default LoginForm;
