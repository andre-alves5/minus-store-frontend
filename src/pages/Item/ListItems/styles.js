import styled from 'styled-components';
import { TiShoppingCart } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';

export const Card = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 280px;
  margin: 2.5rem auto;
  border-style: groove;
  border-radius: 4px;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardBody = styled.div`
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0 5px;
`;

export const CardImage = styled.img`
  padding: 0;
  width: 100%;
  resize: 'contain';
`;
export const CardTitle = styled.h5``;

export const CardSubtitle = styled.h6``;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px 5px 0;
`;

export const CartBody = styled.div`
  display: ${({ click }) => (click ? 'inline' : 'none')};
  right: 0 !important;
  flex-direction: column;
  top: 30;
  z-index: 100;
  width: 100%;
  max-width: 350px;
  position: absolute;
  opacity: 1;
  background: #6c6766;
`;

export const ShoppingCartIcon = styled(TiShoppingCart)`
  position: absolute;
  top: 20px;
  right: 32px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 32px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
`;
