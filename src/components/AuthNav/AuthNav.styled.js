import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
  color: #ebeceb;
  &.active {
    color: black;
  }
`;