import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  margin-top: 20px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  background-color: #000;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const load = keyframes`
  0% {
    box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  }
  33.333% {
    box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  }
  50% {
    box-shadow: 9984px 0 0 0 #000, 9999px -10px 0 0 #000, 10014px 0 0 0 #000;
  }
  66.667% {
    box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  }
  83.333% {
    box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px -10px 0 0 #000;
  }
  100% {
    box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  }
`;

export const Spinner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #000;
  color: #000;
  box-shadow: 9984px 0 0 0 #000, 9999px 0 0 0 #000, 10014px 0 0 0 #000;
  animation: ${load} 1.5s infinite linear;
`;
