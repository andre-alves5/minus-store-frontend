import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavRightEnd,
  NavProfileImage,
  MobileIcon,
} from './styles';

import iconeUsuario from '../../assets/icone_usuario.png';
import logo from '../../assets/logo_pb.png';

const Header = ({ handleLogout, dadosUsuario }) => {
  let firstName = 'Usuário';
  if (dadosUsuario.children.props.usuario) {
    if (dadosUsuario.children.props.usuario.name) {
      [firstName] = dadosUsuario.children.props.usuario.name.split(' ');
    }
  }
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/dashboard" onClick={closeMenu}>
            <img width="150" src={logo} alt="Minus Store" />
          </NavLogo>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/dashboard" onClick={closeMenu}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/items" onClick={closeMenu}>
                Produtos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/orders" onClick={closeMenu}>
                Pedidos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/perfil" onClick={closeMenu}>
                Perfil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={() => handleLogout()}>
                Sair
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavRightEnd>
            <NavProfileImage
              src={
                dadosUsuario.children.props.usuario
                  ? dadosUsuario.children.props.usuario.url
                  : { iconeUsuario }
              }
              alt={firstName}
            />
          </NavRightEnd>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Header;
