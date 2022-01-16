import React from 'react';

const FormField = (props) => {
  const {fields, changeFieldValue, type, name, placeholder, pattern, title} = {...props};
  return (
      <div className="">
        <input 
          type={type}
          className={`App-FormField-${type} App-form-input`}
          name={name}
          placeholder={placeholder}
          value={fields[`${name}`]}
          pattern={pattern}
          required
          title={title}
          onChange={changeFieldValue}
        />
      </div>
  );
}

export default FormField;
