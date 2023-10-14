const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
  color: #9f7b33;
`;
export const Button = styled.button`
  font-size: 20px;
  padding: 8px;
  border: 1px solid #9f7b33;
  border-radius: 8px;
  color: #9f7b33;
  background-color: #f2ece0;
`;
