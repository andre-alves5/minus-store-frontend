import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ active, handleLogout }) => (
  <nav className={active ? 'sidebar' : 'sidebar toggled'}>
    <ul className="list-unstyled">
      <li>
        <Link to="/dashboard"> Home </Link>
      </li>
      <li>
        <Link to="/items"> Produtos </Link>
      </li>
      <li>
        <Link to="/orders"> Pedidos </Link>
      </li>
      <hr />
      <li>
        <Link to="/perfil"> Perfil </Link>
      </li>
      <li>
        <Link to="#" onClick={() => handleLogout()}>
          {' '}
          Sair
        </Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
