import { Wrapper, Text } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Text to="/register">Register</Text>
      <Text to="/login">Log In</Text>
    </Wrapper>
  );
};
