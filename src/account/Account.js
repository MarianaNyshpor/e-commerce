import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../store';
import AccountEditor from './AccountEditor';
import Favorites from './Favorites';
import History from './History';
import { getInitials } from '../app/getInitials';
import AccountButton from './AccountButton';

const Account = ({ changeDialogType, openDialog, isNotification, handleNotification }) => {
  const user = useSelector(userSelector);
  const [accountType, changeAccountType] = useState('edit');
  
  return (
    <div>
      <div className="App-account-header">
        <div className="App-nav-initials App-link-number">{getInitials(user.account.fullName)}</div>
      </div>
      <div>{user.account.fullName}</div>
        <AccountButton changeAccountType={changeAccountType} command="edit" accountType={accountType} title="Edit Account"/>
        <AccountButton changeAccountType={changeAccountType} command="history" accountType={accountType} title="History"/>
        <AccountButton changeAccountType={changeAccountType} command="favorites" accountType={accountType} title="Favorites"/>
      {
        accountType === 'edit' && (<AccountEditor handleNotification={handleNotification}
            isNotification={isNotification}/>)
      }
      {
        accountType === 'history' && (<History changeDialogType={changeDialogType} openDialog={openDialog} />)
      }
      {
        accountType === 'favorites' && (<Favorites />)
      }
      
    </div>
  );
}

export default Account;
