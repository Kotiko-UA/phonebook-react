import { styled } from 'styled-components';

export const List = styled.ol`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Li = styled.li`
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
`;
export const P = styled.p`
  display: block;
  padding: 4px;
  border: 1px solid #9f7b33;
  border-radius: 8px;
  font-size: 16px;
  color: #9f7b33;
  background-color: #fffaec;
  padding-left: 8px;
  padding-right: 8px;
`;
export const Button = styled.button`
  padding: 4px;
  display: block;
  color: #fffaec;
  background-color: #9f7b33;
  border: 2px solid #9f7b33;
  border-radius: 8px;
`;
