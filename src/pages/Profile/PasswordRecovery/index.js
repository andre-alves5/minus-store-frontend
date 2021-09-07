import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validator from 'validator';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/users';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AlertDanger from '../../../components/AlertDanger';
import AlertSuccess from '../../../components/AlertSuccess';
import SpinnerRecuperarSenha from '../../../components/SpinnerRecuperarSenha';

class PasswordRecovery extends Component {
  state = {
    email: '',
    erro: '',
    messageErro: '',
    success: '',
    loading: false,
    formSuccess: false,
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ messageErro: this.props.location.state.messageErro });
      this.props.location.state.messageErro = '';
    }
  }

  onChangeInput = (field, ev) => {
    this.setState({ [field]: ev.target.value });
  };

  passwordRecovery() {
    if (!this.validate()) return;
    const { email } = this.state;

    this.setState({ loading: true });

    this.props.passwordRecovery({ email }, (message) => {
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
    });
  }

  validate() {
    const { email } = this.state;
    if (!email)
      return this.setState({ erro: { message: 'Preencha o campo e-mail!' } });
    if (!validator.isEmail(email))
      return this.setState({
        erro: { message: 'Preencha com e-mail válido!' },
      });
    return true;
  }

  render() {
    const { email, erro, success, loading, formSuccess, messageErro } =
      this.state;

    if (formSuccess) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              message:
                'Enviado no e-mail as intruções para recuperar a senha, verifique sua caixa de entrada!',
            },
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <div className="container-login">
          <div className="login card shadow">
            <Form className="form-signin text-center">
              <img
                className="mb-4"
                src="images/logo.jpg"
                alt="Minus Store"
                width="200"
                height="100"
              />
              <h1 className="h3 mb-3 font-weight-normal">Recuperar Senha</h1>

              <AlertDanger error={erro} />
              <AlertSuccess error={success} />
              {messageErro ? (
                <AlertDanger error={{ message: messageErro }} />
              ) : (
                ''
              )}

              <FormGroup>
                <Label for="email">E-mail</Label>
                <Input
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  placeholder="E-mail do usuário"
                  onChange={(ev) => this.onChangeInput('email', ev)}
                />
              </FormGroup>

              <span onClick={() => this.passwordRecovery()}>
                <SpinnerRecuperarSenha loading={loading} />
              </span>
              <p className="text-center mt-2">
                <Link to="/">Clique aqui</Link>
                {' para acessar'}
              </p>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(PasswordRecovery);
