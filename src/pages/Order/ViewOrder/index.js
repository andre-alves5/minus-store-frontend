import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/orders';

import OrderDetails from './OrderDetails';

class OrderView extends Component {
  state = {
    id: '',
    message: '',
    erro: '',
    success: '',
    loading: false,
    formSuccess: false,
    openModal: false,
    titulo: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ _id: id });
    this.getOrderLocal(id);
  }

  componentDidUpdate(nextProps) {
    const { id } = this.props.match.params;
    if (!this.props.user && nextProps.user) {
      this.getOrderLocal(id);
    }
  }

  componentWillUnmount() {
    this.props.clearOrder();
  }

  getOrderLocal(id) {
    this.props.getOrder(id);
    if (this.props.location.state) {
      this.setState({ message: this.props.location.state.message });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="mr-auto p-2"></div>
          <span className="mr-1 d-none d-md-block">
            <Link to={'/myorders'}>
              <button className="btn btn-outline-info btn-sm">Pedidos</button>
            </Link>
          </span>
        </div>
        <OrderDetails />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  order: state.order.order,
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(OrderView);
