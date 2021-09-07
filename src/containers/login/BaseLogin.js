import React from 'react';
import '../../styles/login/index.css';

class BaseLogin extends React.Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default BaseLogin;
