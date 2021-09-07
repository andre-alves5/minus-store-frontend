import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/orders';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Spinner } from 'reactstrap';

class OrderDetails extends Component {
  renderOrderInfo() {
    if (!this.props.order) {
      return null;
    }

    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">Titulo: </div>
          <h2>{this.props.order.titulo}</h2>
        </div>
        <h4>Introdução: </h4>
        <p>{this.props.order.introducao}</p>
        <h4>Indice: </h4>
        <p>{this.props.order.indice}</p>
        <h6>Autor: </h6>
        <p>{this.props.order ? this.props.order.autor : ''}</p>
        <h6>Bibliografia: </h6>
        <p>{this.props.order ? this.props.order.bibliografia : ''}</p>
        <hr></hr>
        <p>Categoria: {this.props.order ? this.props.order.categoria : ''}</p>
        <p>
          Cadastrado{' '}
          {this.props.order
            ? format(
                new Date(this.props.order.createdAt),
                'dd/MM/yyyy hh:mm:ss',
                { locale: pt }
              )
            : ''}
        </p>
        <p>
          Editado{' '}
          {this.props.order.updatedAt
            ? format(
                new Date(this.props.order.updatedAt),
                'dd/MM/yyyy hh:mm:ss',
                { locale: pt }
              )
            : ''}
        </p>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.order ? (
          ''
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner color="primary" />
          </div>
        )}
        {this.renderOrderInfo()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(OrderDetails);
