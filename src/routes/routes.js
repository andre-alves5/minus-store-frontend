import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store/store';

import { history } from '../history';

import Login from '../pages/Login';
import PasswordRecovery from '../pages/Profile/PasswordRecovery';
import AtualizarSenhaLogin from '../pages/Profile/AtualizarSenhaLogin';

import Dashboard from '../pages/Dashboard';
import Perfil from '../pages/Profile/Perfil';
import UpdatePerfil from '../pages/Profile/UpdatePerfil';
import UpdatePerfilSenha from '../pages/Profile/UpdatePerfilSenha';
import UpdatePerfilFoto from '../pages/Profile/UpdatePerfilFoto';

import Items from '../pages/Item/ListItems';
import ViewItem from '../pages/Item/ViewItem';
import CadItem from '../pages/Item/CadItem';

import Orders from '../pages/Order/ListOrders';
import ViewOrder from '../pages/Order/ViewOrder';

import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';

export default function Routes() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={baseLogin(Login)} />
            <Route
              path="/recuperar-senha-login"
              exact
              component={baseLogin(PasswordRecovery)}
            />
            <Route
              path="/atualizar-senha-login/:chave"
              exact
              component={baseLogin(AtualizarSenhaLogin)}
            />

            <Route
              path="/dashboard"
              exact
              component={baseDashboard(Dashboard)}
            />
            <Route path="/perfil" exact component={baseDashboard(Perfil)} />
            <Route
              path="/update-perfil"
              exact
              component={baseDashboard(UpdatePerfil)}
            />
            <Route
              path="/update-perfil-senha"
              exact
              component={baseDashboard(UpdatePerfilSenha)}
            />
            <Route
              path="/update-perfil-foto"
              exact
              component={baseDashboard(UpdatePerfilFoto)}
            />
            <Route path="/items" exact component={baseDashboard(Items)} />
            <Route
              path="/view-item/:id"
              exact
              component={baseDashboard(ViewItem)}
            />
            <Route path="/caditem" exact component={baseDashboard(CadItem)} />
            <Route path="/orders" exact component={baseDashboard(Orders)} />
            <Route
              path="/view-order/:id"
              exact
              component={baseDashboard(ViewOrder)}
            />
          </Switch>
        </BrowserRouter>
      </Router>
    </Provider>
  );
}
