import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/items';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Spinner } from 'reactstrap';

class ItemDetails extends Component {
  renderItemInfo() {
    if (!this.props.item) {
      return null;
    }

    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">Titulo: </div>
          <h2>{this.props.item.titulo}</h2>
        </div>
        <h4>Item: </h4>
        <p>{this.props.item.item}</p>
        <h4>Descrição: </h4>
        <p>{this.props.item.description}</p>
        <h6>Cor: </h6>
        <p>{this.props.item.colour}</p>
        <h6>Tamanho: </h6>
        <p>{this.props.item.size}</p>
        <h6>Preço: </h6>
        <p>{this.props.item.price}</p>
        <p>
          Cadastrado{' '}
          {this.props.item
            ? format(
                new Date(this.props.item.createdAt),
                'dd/MM/yyyy hh:mm:ss',
                { locale: pt }
              )
            : ''}
        </p>
        <p>
          Editado{' '}
          {this.props.item.updatedAt
            ? format(
                new Date(this.props.item.updatedAt),
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
        {this.props.item ? (
          ''
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner color="primary" />
          </div>
        )}
        {this.renderItemInfo()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item.item,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(ItemDetails);
