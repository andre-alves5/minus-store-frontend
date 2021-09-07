import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/items';
import formatCurrency from '../../../components/utils/format-currency';

import { LoadingBar } from '../../../components/LoadingBar';

import { Button, CardText } from 'reactstrap';
import AlertSuccess from '../../../components/AlertSuccess';
import AlertDanger from '../../../components/AlertDanger';

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardInfo,
  CartBody,
  ShoppingCartIcon,
  CloseIcon,
} from './styles';
import Cart from '../../../components/Cart';
import { CartIcon } from '../../../components/Cart/styles';

class Items extends Component {
  state = {
    currentPage: 1,
    limit: 20,
    message: '',
    erro: '',
    success: '',
    loading: false,
    apiData: false,
    cartItems: [],
    click: false,
  };

  componentDidMount() {
    this.getItemsLocal();
  }

  componentDidUpdate(nextProps) {
    if (!this.props.user && nextProps.user) this.getItemsLocal();
    this.getApiData();
  }

  componentWillUnmount() {
    this.props.clearItem();
    this.props.clearItems();
  }

  getApiData() {
    if (
      typeof this.props.items !== 'undefined' &&
      this.props.items !== null &&
      !this.state.apiData &&
      this.props.items.page === this.state.currentPage
    ) {
      this.setState({ apiData: true });
    }
  }

  getItemsLocal() {
    const { currentPage, limit } = this.state;

    this.props.getItems(currentPage, limit);
    const { items } = this.props;
    if (this.props.location.state) {
      this.setState({ message: this.props.location.state.message });
      this.props.location.state.message = '';
    }
    if (items === 'undefined') return null;
  }

  handleClick(click) {
    this.setState({ click: !click });
  }

  handleAddToCart(item) {
    const { cartItems } = this.state;
    let alreadyExists = false;
    cartItems.forEach((x) => {
      if (x._id === item._id) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...item, count: 1 });
    }
    console.log(cartItems);
  }

  changeCurrentPage = (currentPage) => {
    this.props.clearItems();
    this.setState({ apiData: false });
    this.setState({ currentPage }, () => {
      this.getItemsLocal();
    });
  };

  render() {
    const { message, erro, success, apiData, cartItems, click } = this.state;
    let items = [];
    if (this.props.items) items = this.props.items.docs;

    let hasPrevPage = false;
    if (
      typeof this.props.items !== 'undefined' &&
      this.props.items !== null &&
      this.props.items.page !== '' &&
      this.props.items.page !== 1
    ) {
      hasPrevPage = true;
    }

    let nextPage = false;
    let hasNextPage = false;
    if (
      typeof this.props.items !== 'undefined' &&
      this.props.items !== null &&
      this.props.items.nextPage <= this.props.items.totalPages &&
      this.props.items.nextPage !== null
    ) {
      nextPage = true;
      hasNextPage = true;
    }

    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h2 className="display-4 titulo">Lista de Produtos</h2>
          </div>
          <CartIcon onClick={() => this.handleClick(click)}>
            {click ? <CloseIcon /> : <ShoppingCartIcon />}
          </CartIcon>
        </div>
        <hr />

        {message ? <AlertSuccess error={{ message: message }} /> : ''}
        <AlertDanger error={erro} />
        <AlertSuccess error={success} />

        {apiData ? (
          <div className="items">
            {items.map((item) => (
              <div key={item._id}>
                <CartBody click={click}>
                  <Cart cartItems={cartItems} />
                </CartBody>
                <Card>
                  <CardImage
                    src={
                      item.url
                        ? item.url
                        : process.env.REACT_APP_API_URL +
                          '/files/items/placeholder.jpg'
                    }
                    alt={item.title}
                  />
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.description}</CardSubtitle>
                    <CardInfo>
                      <CardText>{formatCurrency(item.price)}</CardText>
                      <CardText>{item.color}</CardText>
                      <CardText>{item.size}</CardText>
                      <Button
                        onClick={() => {
                          this.handleAddToCart(item);
                        }}
                      >
                        Adicionar
                      </Button>
                    </CardInfo>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}

        {apiData ? '' : <LoadingBar />}

        {apiData ? (
          <nav aria-label="paginacao">
            <ul className="pagination pagination-sm justify-content-center">
              <li className={hasPrevPage ? 'page-item' : 'page-item disabled'}>
                <span
                  className="page-link"
                  onClick={() => this.changeCurrentPage(1)}
                >
                  Primeira
                </span>
              </li>

              {hasPrevPage ? (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() =>
                      this.changeCurrentPage(
                        this.props.items.prevPage
                          ? this.props.items.prevPage
                          : 1
                      )
                    }
                  >
                    {this.props.items.prevPage ? this.props.items.prevPage : ''}
                  </span>
                </li>
              ) : (
                ''
              )}

              <li className="page-item active">
                <span className="page-link" href="#">
                  {this.props.items ? this.props.items.page : '1'}
                </span>
              </li>

              {nextPage ? (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() =>
                      this.changeCurrentPage(
                        this.props.items.nextPage
                          ? this.props.items.nextPage
                          : 1
                      )
                    }
                  >
                    {this.props.items.nextPage ? this.props.items.nextPage : ''}
                  </span>
                </li>
              ) : (
                ''
              )}

              <li className={hasNextPage ? 'page-item' : 'page-item disabled'}>
                <span
                  className="page-link"
                  onClick={() =>
                    this.changeCurrentPage(
                      this.props.items ? this.props.items.totalPages : 1
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
  items: state.item.items,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Items);
