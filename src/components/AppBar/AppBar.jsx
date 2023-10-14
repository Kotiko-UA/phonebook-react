import { useAuth } from 'Hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Container>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Navigation />
      </Container>
    </Wrapper>
  );
};
