import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationEl = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const NavEl = styled(NavLink)`
  font-size: 28px;
  color: #3a2805;
  &.active {
    color: #ca9a39;
  }
`;
