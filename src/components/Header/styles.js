import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
`;

export const NavRightEnd = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    align-items: center;
    right: 1rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #6c6766;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #6c6766;
      transition: all 0.3s ease;
    }
  }
`;

export const NavProfileImage = styled.img`
  display: flex;
  width: 65px;
  height: 65px;
  align-self: center;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
