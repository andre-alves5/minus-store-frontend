import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/items';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AlertDanger from '../../../components/AlertDanger';
import AlertSuccess from '../../../components/AlertSuccess';
import SpinnerCad from '../../../components/SpinnerCad';

class CadOrder extends Component {
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

    this.props.postItem({ item, description, colour, size, price }, (msg) => {
      if (msg.erro.error) {
        this.setState({ erro: { message: msg.erro.message } });
        this.setState({ success: '' });
        this.setState({ loading: false });
      } else {
        this.setState({ success: { message: msg.erro.message } });
        this.setState({ erro: '' });
        this.setState({ formSuccess: true });
        this.setState({ loading: false });
      }
    });
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
      item,
      description,
      colour,
      size,
      price,
      erro,
      success,
      loading,
      formSuccess,
    } = this.state;

    if (formSuccess) {
      return (
        <Redirect
          to={{
            pathname: '/items',
            state: { msg: 'Item cadastrado com sucesso!' },
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h2 className="display-4 titulo">Cadastrar Novo Item</h2>
          </div>
          <Link to={'/myarticles'}>
            <button className="btn btn-outline-info btn-sm">Items</button>
          </Link>
        </div>
        <hr />
        <AlertDanger erros={erro} />
        <AlertSuccess erros={success} />
        <Form>
          <FormGroup>
            <Label for="name">Titulo</Label>
            <Input
              type="text"
              value={item}
              name="item"
              id="item"
              placeholder="Insira o Titulo do Item"
              autoComplete="item"
              onChange={(ev) => this.onChangeInput('item', ev)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Descrição</Label>
            <Input
              type="text"
              value={description}
              name="description"
              id="description"
              placeholder="Digite uma breve descrição do Item"
              autoComplete="description"
              onChange={(ev) => this.onChangeInput('description', ev)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Cor</Label>
            <Input
              type="text"
              value={colour}
              name="colour"
              id="colour"
              placeholder="Digite a Cor do Item"
              autoComplete="colour"
              onChange={(ev) => this.onChangeInput('colour', ev)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Tamanho</Label>
            <Input
              type="text"
              value={size}
              name="size"
              id="size"
              placeholder="Digite o Tamanho do Item"
              autoComplete="size"
              onChange={(ev) => this.onChangeInput('size', ev)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Preço</Label>
            <Input
              type="text"
              value={price}
              name="price"
              id="price"
              placeholder="Digite o Preço do Item"
              autoComplete="price"
              onChange={(ev) => this.onChangeInput('price', ev)}
            />
          </FormGroup>

          <Link onClick={() => this.cadOrder()} to="#">
            <SpinnerCad loading={loading} />
          </Link>
        </Form>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(CadOrder);
