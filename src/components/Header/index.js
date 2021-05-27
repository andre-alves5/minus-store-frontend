import React from 'react';
import { Nav, Bars, NavLink, NavMenu } from './styles';

import iconeUsuario from '../../assets/icone_usuario.png';
import logo from '../../assets/logo.jpg';

const Header = ({ handleLogout, dadosUsuario, altSitMenu }) => {
  let firstName = 'Usuário';
  if (dadosUsuario.children.props.usuario) {
    if (dadosUsuario.children.props.usuario.name) {
      [firstName] = dadosUsuario.children.props.usuario.name.split(' ');
    }
  }

  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/dashboard">
          <img width="150" src={logo} alt="Minus Store" />
        </NavLink>
        <Bars onClick={() => altSitMenu()} />
        <NavMenu>
          <NavLink to="/dashboard" activeStyle>
            {' '}
            Home
          </NavLink>
          <NavLink to="/items" activeStyle>
            {' '}
            Produtos
          </NavLink>
          <NavLink to="/orders" activeStyle>
            {' '}
            Pedidos
          </NavLink>
          <NavLink to="/perfil" activeStyle>
            {' '}
            Perfil
          </NavLink>
          <NavLink to="#" onClick={() => handleLogout()} activeStyle>
            {' '}
            Sair
          </NavLink>
        </NavMenu>
        <div className="header-logo bg-primary">
          <img
            className="rounded-circle mt-2"
            src={
              dadosUsuario.children.props.usuario
                ? dadosUsuario.children.props.usuario.url
                : { iconeUsuario }
            }
            width="50"
            height="50"
            alt={firstName}
          />
        </div>
      </Nav>
    </React.Fragment>
  );
};

export default Header;
