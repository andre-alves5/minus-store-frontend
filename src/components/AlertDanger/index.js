import React from 'react';

const AlertDanger = (props) => {
  if (props.error === '') return null;

  return <div className="alert alert-danger">{props.error.message}</div>;
};

export default AlertDanger;
