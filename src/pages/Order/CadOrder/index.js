import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/items';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  Button,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import AlertDanger from '../../../components/AlertDanger';
import AlertSuccess from '../../../components/AlertSuccess';
import SpinnerDeleteSimples from '../../../components/SpinnerDeleteSimples';

class CadPostOrder extends Component {
  state = {
    item: '',
    description: '',
    colour: '',
    size: '',
    price: '',
    erro: '',
    success: '',
    loading: false,
    formSuccess: false,
  };

  onChangeInput = (field, ev) => {
    this.setState({ [field]: ev.target.value });
  };

  cadOrder() {
    const { item, description, colour, size, price } = this.state;
    if (!this.validate()) return;

    this.setState({ loading: true });

    this.props.postItem(
      { item, description, colour, size, price },
      (message) => {
        if (message.erro.error) {
          this.setState({ erro: { message: message.erro.message } });
          this.setState({ success: '' });
          this.setState({ loading: false });
        } else {
          this.setState({ success: { message: message.erro.message } });
          this.setState({ erro: '' });
          this.setState({ formSuccess: true });
          this.setState({ loading: false });
        }
      }
    );
  }

  validate() {
    const { item, description, colour, size, price } = this.state;
    if (!item)
      return this.setState({
        erro: { message: 'Preencha o Titulo do Item!' },
      });
    if (!description)
      return this.setState({
        erro: { message: 'Preencha a Descrição do Item!' },
      });
    if (!colour)
      return this.setState({
        erro: { message: 'Preencha a cor do Item!' },
      });
    if (!size)
      return this.setState({
        erro: { message: 'Preencha o tamanho do Item!' },
      });
    if (!price)
      return this.setState({
        erro: { message: 'Preencha o preço do Item!' },
      });
    return true;
  }

  render() {
    const {
      name,
      phone,
      street,
      number,
      neighborhood,
      town,
      state,
      country,
      zipcode,
      erro,
      success,
      loading,
      openModal,
      formSuccess,
    } = this.state;

    if (formSuccess) {
      return (
        <Redirect
          to={{
            pathname: '/orders',
            state: { message: 'Pedido cadastrado com sucesso!' },
          }}
        />
      );
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
            <h2 className="display-4 titulo">Checkout</h2>
          </div>
        </div>
        <hr />
        <AlertDanger error={erro} />
        <AlertSuccess error={success} />
        <Form>
          <FormGroup>
            <Label for="name">Nome Completo: </Label>
            <Input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="Nome completo do Cliente"
              autoComplete="name"
              onChange={(ev) => this.onChangeInput('name', ev)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Telefone :</Label>
            <Input
              type="text"
              value={phone}
              name="phone"
              id="phone"
              placeholder="(**) ***** ****"
              autoComplete="phone"
              onChange={(ev) => this.onChangeInput('phone', ev)}
            />
          </FormGroup>
          <div>
            <p>Endereço</p>
            <FormGroup>
              <Label for="name">Rua :</Label>
              <Input
                type="text"
                value={street}
                name="street"
                id="street"
                placeholder="Endereço do cliente"
                autoComplete="street"
                onChange={(ev) => this.onChangeInput('street', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Numero: </Label>
              <Input
                type="text"
                value={number}
                name="number"
                id="number"
                autoComplete="number"
                onChange={(ev) => this.onChangeInput('number', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Bairro: </Label>
              <Input
                type="text"
                value={neighborhood}
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
                autoComplete="neighborhood"
                onChange={(ev) => this.onChangeInput('neighborhood', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Cidade: </Label>
              <Input
                type="text"
                value={town}
                name="town"
                id="town"
                placeholder="Cidade"
                autoComplete="town"
                onChange={(ev) => this.onChangeInput('town', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Estado: </Label>
              <Input
                type="text"
                value={state}
                name="state"
                id="state"
                placeholder="Estado"
                autoComplete="state"
                onChange={(ev) => this.onChangeInput('state', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">País: </Label>
              <Input
                type="text"
                value={country}
                name="country"
                id="country"
                placeholder="País"
                autoComplete="country"
                onChange={(ev) => this.onChangeInput('country', ev)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">CEP: </Label>
              <Input
                type="text"
                value={zipcode}
                name="zipcode"
                id="zipcode"
                placeholder="CEP"
                autoComplete="zipcode"
                onChange={(ev) => this.onChangeInput('zipcode', ev)}
              />
            </FormGroup>
          </div>
        </Form>
        <p>Total</p>
        <button>Confirmar</button>
        <button>Cancelar</button>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(CadPostOrder);
