import React from 'react';
import Header from '../../components/Header';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import '../../styles/dashboard/index.css';

class BaseDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          handleLogout={this.props.handleLogout}
          dadosUsuario={this.props}
        />
        <div className="d-flex">
          <div className="content p-1">
            <div className="list-group-item">{this.props.children}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(BaseDashboard);
