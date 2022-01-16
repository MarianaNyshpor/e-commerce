import React from 'react';

const AccountButton = ({ accountType, changeAccountType, command, title }) => {
  const handleOnClick = type => {
    changeAccountType(type);
  }
  return (
      <button className={accountType === command ? 'App-account-button-active App-account-button' : 'App-account-button'}
        onClick={() => handleOnClick(command)}>
          {title}
      </button>
  );
}

export default AccountButton;
