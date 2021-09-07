import React from 'react';
import {
  LoginContainer,
  CardWrapper,
  CardLink,
  Input,
  Label,
  Form,
  Title,
  Logo,
} from './styles';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import AlertDanger from '../../../components/AlertDanger';
import AlertSuccess from '../../../components/AlertSuccess';
import SpinnerLogin from '../../../components/SpinnerLogin';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    message: '',
    loading: false,
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ message: this.props.location.state.message });
      this.props.location.state.message = '';
    }
  }

  onChangeInput = (field, ev) => {
    this.setState({ [field]: ev.target.value });
  };

  handleLogin() {
    this.setState({ message: '' });
    const { email, password } = this.state;

    if (!this.validate()) return;
    this.setState({ loading: true });

    this.props.handleLogin({ email, password }, (message) => {
      if (message.error) {
        this.setState({ error: { message: message.error.message } });
        this.setState({ loading: false });
      }
    });
  }

  validate() {
    const { email, password } = this.state;

    if (!email)
      return this.setState({ error: { message: 'Preencha o campo e-mail!' } });
    if (!password)
      return this.setState({ error: { message: 'Preencha o campo senha!' } });

    return true;
  }

  render() {
    const { email, password, error, message, loading } = this.state;
    return (
      <React.Fragment>
        <LoginContainer>
          <CardWrapper>
            <Form>
              <Logo src="images/logo_sf.png" alt="Minus Store" />
              <Title>Área Restrita</Title>

              <AlertDanger error={error} />
              {message ? <AlertSuccess error={{ message: message }} /> : ''}

              <div>
                <Label>Usuário</Label>
                <Input
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  placeholder="E-mail do usuário"
                  onChange={(ev) => this.onChangeInput('email', ev)}
                />
              </div>

              <div>
                <Label>Senha</Label>
                <Input
                  type="password"
                  value={password}
                  name="password"
                  id="password"
                  placeholder="Senha do usuário"
                  autoComplete="password"
                  onChange={(ev) => this.onChangeInput('password', ev)}
                />
              </div>

              <span onClick={() => this.handleLogin()}>
                <SpinnerLogin loading={loading} />
              </span>

              <CardLink to="/recuperar-senha-login">Esqueceu a senha?</CardLink>
            </Form>
          </CardWrapper>
        </LoginContainer>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(Login);
