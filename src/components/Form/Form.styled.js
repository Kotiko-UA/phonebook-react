import { styled } from 'styled-components';
import { ErrorMessage, Form, Field } from 'formik';
export const Error = styled(ErrorMessage)`
  font-size: 16px;
  color: red;
`;
export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  font-size: 20px;
  padding: 8px;
  border: 1px solid #9f7b33;
  border-radius: 8px;
  color: #9f7b33;
  background-color: #f2ece0;
`;
export const Input = styled(Field)`
  font-size: 18px;
  color: #9f7b33;
  background-color: #fffaec;
  padding-left: 8px;
  padding-right: 8px;
`;
export const Label = styled.label`
  font-size: 18px;
  color: #9f7b33;
  background-color: #fffaec;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 8px;
`;
