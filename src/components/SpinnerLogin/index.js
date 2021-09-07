import React from 'react';
import { Spinner, Button } from './styles';

const SpinnerLogin = (props) => {
  if (props.loading) return <Spinner />;

  return <Button>Acessar</Button>;
};

export default SpinnerLogin;
