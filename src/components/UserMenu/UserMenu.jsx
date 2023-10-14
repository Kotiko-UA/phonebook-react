import { useAuth } from 'Hooks/useAuth';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, Wrapper, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>Hi, {user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
