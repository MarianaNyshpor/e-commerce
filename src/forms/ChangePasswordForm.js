import React from 'react';
import FormField from './FormField';

const ChangePasswordForm = (props) => {
  const {fields, changeFieldValue } = {...props};
  
  return (
      <div>
        <FormField
          fields={fields}
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?\&])[A-Za-z\d@$!%*#?\&]"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          changeFieldValue={changeFieldValue}/>
        <FormField
          fields={fields}
          type="password"
          name="password"
          placeholder="Current Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?\&])[A-Za-z\d@$!%*#?\&]"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          changeFieldValue={changeFieldValue}/>
        <FormField
          fields={fields}
          type="password"
          name="confirmedPassword"
          placeholder="Confirm Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?\&])[A-Za-z\d@$!%*#?\&]"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          changeFieldValue={changeFieldValue}/>
        <button className="App-form-button" type="submit">Change Password</button>
      </div>
  );
}

export default ChangePasswordForm;
