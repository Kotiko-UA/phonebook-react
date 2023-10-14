import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 20px;
`;
export const Text = styled(NavLink)`
  font-size: 20px;
  color: #9f7b33;
  &.active {
    color: #ca9a39;
  }
`;
