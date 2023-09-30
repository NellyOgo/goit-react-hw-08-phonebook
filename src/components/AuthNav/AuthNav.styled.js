import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  color: black;
  transition: color 250ms linear, font-size 250ms linear;

  &:hover {
    color: red;
    font-size: 35px;
  }
`;