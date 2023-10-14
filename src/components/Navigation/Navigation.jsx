import { useAuth } from 'Hooks/useAuth';
import { NavEl, NavigationEl } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationEl>
      <NavEl to="/">Home</NavEl>
      {isLoggedIn && <NavEl to="/contacts">Contacts</NavEl>}
    </NavigationEl>
  );
};
