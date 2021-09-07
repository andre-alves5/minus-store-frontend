import React from 'react';
import BaseDashboard from './BaseDashboard';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const baseDashboard = (Component) => {
  class ComponentBaseDashboard extends React.Component {
    componentDidMount() {
      const { getUser } = this.props;
      getUser();
    }

    render() {
      return (
        <BaseDashboard>
          <Component {...this.props} />
        </BaseDashboard>
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorized: state.auth.authorized,
    usuario: state.auth.usuario,
  });

  return connect(mapStateToProps, actions)(ComponentBaseDashboard);
};

export default baseDashboard;
