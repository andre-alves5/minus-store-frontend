import React from 'react';

const AlertSuccess = (props) => {
  if (props.error === '') return null;

  return <div className="alert alert-success">{props.error.message}</div>;
};

export default AlertSuccess;
