import React, { useState } from 'react';

export const useFormFields = initialValues => {
    const [fields, setFormFields ] = useState(initialValues);
    const changeFieldValue = e => {
      const {name, value} = e.target;
      setFormFields(prev => ({
        ...prev,
        [name]: value
      }));
    }
    return {fields, changeFieldValue}
  }
