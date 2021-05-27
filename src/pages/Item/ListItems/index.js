import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/items';
import formatCurrency from '../../../components/utils/format-currency';

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from 'reactstrap';
import AlertSuccess from '../../../components/AlertSuccess';
import AlertDanger from '../../../components/AlertDanger';
import SpinnerDeleteSimples from '../../../components/SpinnerDeleteSimples';

const url = `${process.env.REACT_APP_API_URL}/files/items/`;

class Items extends Component {
  state = {
    currentPage: 1,
    limit: 20,
    msg: '',
    erro: '',
    success: '',
    loading: false,
    openModal: false,
    apiData: false,
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
      this.setState({ msg: this.props.location.state.msg });
      this.props.location.state.msg = '';
    }
    if (items === 'undefined') return null;
  }

  deleteItem() {
    this.setState({ apiData: false });
    this.setState({ loading: true });
    this.props.deleteItem(this.state.id_delete, (msg) => {
      if (msg.erro.error) {
        this.setState({ erro: { message: msg.erro.message } });
        this.setState({ loading: false });
        this.props.clearItems();
        this.setState({ openModal: false });
      } else {
        this.setState({ success: { message: msg.erro.message } });
        this.setState({ loading: false });
        this.getUsuarios();
        this.setState({ openModal: false });
      }
    });
  }

  openModal(id) {
    this.setState({ id_delete: id });
    this.setState({ openModal: true });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  changeCurrentPage = (currentPage) => {
    this.props.clearItems();
    this.setState({ apiData: false });
    this.setState({ currentPage }, () => {
      this.getItemsLocal();
    });
  };
  render() {
    const { msg, erro, success, loading, openModal, apiData } = this.state;
    let items = [];
    if (this.props.items) items = this.props.items.docs;

    var hasPrevPage = false;
    if (
      typeof this.props.items !== 'undefined' &&
      this.props.items !== null &&
      this.props.items.page !== '' &&
      this.props.items.page !== 1
    ) {
      hasPrevPage = true;
    }

    var nextPage = false;
    var hasNextPage = false;
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
        <Modal isOpen={openModal}>
          <ModalHeader className="bg-danger text-white">Confirmar</ModalHeader>
          <ModalBody>Você realmente deseja apagar esse Item?</ModalBody>
          <ModalFooter>
            <Button
              outline
              color="primary"
              size="sm"
              onClick={() => this.closeModal()}
            >
              Cancelar
            </Button>
            <span onClick={() => this.deleteItem()}>
              <SpinnerDeleteSimples loading={loading} />
            </span>
          </ModalFooter>
        </Modal>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h2 className="display-4 titulo">Lista de Produtos</h2>
          </div>
          <Link to="cadItem">
            <button className="btn btn-outline-info btn-sm">
              Novo Produto
            </button>
          </Link>
        </div>
        <hr />

        {msg ? <AlertSuccess erros={{ message: msg }} /> : ''}
        <AlertDanger erros={erro} />
        <AlertSuccess erros={success} />

        {apiData ? (
          <div className="items">
            {items.map((item) => (
              <div key={item._id}>
                <Card>
                  <CardImg
                    top
                    width="350px"
                    height="250px"
                    src={
                      item.fileName
                        ? url + item.fileName
                        : url + 'placeholder.jpg'
                    }
                    alt={item.title}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {item.description}
                    </CardSubtitle>
                    <div className="items-price">
                      <CardText>{formatCurrency(item.price)}</CardText>
                      <CardText>{item.size}</CardText>
                      <Button>Adicionar</Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
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
                        this.props.Items.prevPage
                          ? this.props.Items.prevPage
                          : 1
                      )
                    }
                  >
                    {this.props.Items.prevPage ? this.props.Items.prevPage : ''}
                  </span>
                </li>
              ) : (
                ''
              )}

              <li className="page-item active">
                <span className="page-link" href="#">
                  {this.props.Items ? this.props.Items.page : '1'}
                </span>
              </li>

              {nextPage ? (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() =>
                      this.changeCurrentPage(
                        this.props.Items.nextPage
                          ? this.props.Items.nextPage
                          : 1
                      )
                    }
                  >
                    {this.props.Items.nextPage ? this.props.Items.nextPage : ''}
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
                      this.props.Items ? this.props.Items.totalPages : 1
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
