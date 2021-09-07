import styled, { keyframes } from 'styled-components';

const loadBar = keyframes`
  0% {
    left: -10%;
  }
  100% {
    left: 110%;
  }
`;

export const LoadingBar = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 5px;
  background-color: #000;
  animation: ${loadBar} 2s cubic-bezier(0.09, 0.89, 0.7, 0.71) infinite;
`;
