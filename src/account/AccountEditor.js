import React from 'react';
import {Form} from '../forms/Form';

const AccountEditor = ({handleNotification, isNotification}) => {
  return (
    <div>
      <Form handleNotification={handleNotification}
            isNotification={isNotification} dialogType="mainInformation" />
      <Form dialogType="changePassword" />
    </div>
  );
}

export default AccountEditor;
