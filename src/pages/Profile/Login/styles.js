import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eaeef3;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: #fff;
`;

export const CardLink = styled(Link)`
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;
  padding-top: 20px;

  &:hover {
    color: #777;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #000;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 16px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label`
  display: block;
  align-self: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  color: #000;
  display: block;
`;

export const Form = styled.form`
  display: block;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
`;
