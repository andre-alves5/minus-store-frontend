import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/orders';

import {
  Spinner,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import AlertSuccess from '../../../components/AlertSuccess';
import AlertDanger from '../../../components/AlertDanger';

class Orders extends Component {
  state = {
    currentPage: 1,
    limit: 20,
    message: '',
    erro: '',
    success: '',
    loading: false,
    openModal: false,
    apiData: false,
  };

  componentDidMount() {
    this.getOrdersLocal();
  }

  componentDidUpdate(nextProps) {
    if (!this.props.user && nextProps.user) this.getOrdersLocal();
    this.getApiData();
  }

  componentWillUnmount() {
    this.props.clearOrder();
    this.props.clearOrders();
  }

  getApiData() {
    if (
      typeof this.props.orders !== 'undefined' &&
      this.props.orders !== null &&
      !this.state.apiData &&
      this.props.orders.page === this.state.currentPage
    ) {
      this.setState({ apiData: true });
    }
  }

  getOrdersLocal() {
    const { currentPage, limit } = this.state;
    this.props.getOrders(currentPage, limit);
    const { orders } = this.props;
    if (this.props.location.state) {
      this.setState({ message: this.props.location.state.message });
      this.props.location.state.message = '';
    }
    if (orders === 'undefined') return null;
  }

  changeCurrentPage = (currentPage) => {
    this.props.clearOrders();
    this.setState({ apiData: false });
    this.setState({ currentPage }, () => {
      this.getOrdersLocal();
    });
  };
  render() {
    const { message, erro, success, apiData } = this.state;
    let orders = [];
    if (this.props.orders) orders = this.props.orders.docs;

    var hasPrevPage = false;
    if (
      typeof this.props.orders !== 'undefined' &&
      this.props.orders !== null &&
      this.props.orders.page !== '' &&
      this.props.orders.page !== 1
    ) {
      hasPrevPage = true;
    }

    var nextPage = false;
    var hasNextPage = false;
    if (
      typeof this.props.orders !== 'undefined' &&
      this.props.orders !== null &&
      this.props.orders.nextPage <= this.props.orders.totalPages &&
      this.props.orders.nextPage !== null
    ) {
      nextPage = true;
      hasNextPage = true;
    }

    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h2 className="display-4 titulo">Lista de Pedidos</h2>
          </div>
          <Link to="cadOrder">
            <button className="btn btn-outline-info btn-sm">Novo Pedido</button>
          </Link>
        </div>
        <hr />

        {message ? <AlertSuccess error={{ message: message }} /> : ''}
        <AlertDanger error={erro} />
        <AlertSuccess error={success} />

        {apiData ? (
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th className="d-none d-sm-table-cell">Numero do Pedido</th>
                  <th className="d-none d-sm-table-cell">Cliente</th>
                  <th className="d-none d-sm-table-cell">Status</th>
                  <th className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="d-none d-sm-table-cell">{order._id}</td>
                    <td className="d-none d-sm-table-cell">{order.client}</td>
                    <td className="d-none d-sm-table-cell">{order.status}</td>
                    <td className="text-center">
                      <span className="d-none d-md-block">
                        <Link to={'/view-order/' + order._id}>
                          <button className="btn btn-outline-primary btn-sm mr-1">
                            Visualizar
                          </button>
                        </Link>
                        <Link to={'/update-order/' + order._id}>
                          <button className="btn btn-outline-warning btn-sm mr-1">
                            Atualizar
                          </button>
                        </Link>
                        <Link to={'/delete-order/' + order._id}>
                          <button className="btn btn-outline-danger btn-sm mr-1">
                            Deletar
                          </button>
                        </Link>
                      </span>
                      <div className="dropdown d-block d-md-none">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle
                            outline
                            color="primary"
                            size="sm"
                            caret
                          >
                            Ações
                          </DropdownToggle>
                          <DropdownMenu>
                            <Link
                              className="dropdown-order"
                              to={'/view-order/' + order._id}
                            >
                              Visualizar
                            </Link>
                            <Link
                              className="dropdown-order"
                              to={'/update-order/' + order._id}
                            >
                              Editar
                            </Link>
                            <Link
                              className="dropdown-order"
                              to={'/delete-order/' + order._id}
                            >
                              Editar
                            </Link>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ''
        )}

        {apiData ? (
          ''
        ) : (
          <div className="d-flex justify-content-center">
            {' '}
            <Spinner color="primary" />
          </div>
        )}

        {apiData ? (
          <nav aria-label="paginacao">
            <ul className="pagination pagination-sm justify-content-center">
              <li
                className={hasPrevPage ? 'page-order' : 'page-order disabled'}
              >
                <span
                  className="page-link"
                  onClick={() => this.changecurrentPage(1)}
                >
                  Primeira
                </span>
              </li>

              {hasPrevPage ? (
                <li className="page-order">
                  <span
                    className="page-link"
                    onClick={() =>
                      this.changecurrentPage(
                        this.props.orders.prevPage
                          ? this.props.orders.prevPage
                          : 1
                      )
                    }
                  >
                    {this.props.orders.prevPage
                      ? this.props.orders.prevPage
                      : ''}
                  </span>
                </li>
              ) : (
                ''
              )}

              <li className="page-order active">
                <span className="page-link" href="#">
                  {this.props.orders ? this.props.orders.page : '1'}
                </span>
              </li>

              {nextPage ? (
                <li className="page-order">
                  <span
                    className="page-link"
                    onClick={() =>
                      this.changecurrentPage(
                        this.props.orders.nextPage
                          ? this.props.orders.nextPage
                          : 1
                      )
                    }
                  >
                    {this.props.orders.nextPage
                      ? this.props.orders.nextPage
                      : ''}
                  </span>
                </li>
              ) : (
                ''
              )}

              <li
                className={hasNextPage ? 'page-order' : 'page-order disabled'}
              >
                <span
                  className="page-link"
                  onClick={() =>
                    this.changecurrentPage(
                      this.props.orders ? this.props.orders.totalPages : 1
                    )
                  }
                >
                  Última
                </span>
              </li>
            </ul>
          </nav>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Orders);
