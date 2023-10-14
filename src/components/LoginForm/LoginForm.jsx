import { logIn } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, FormEl, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormEl onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" autoComplete="email" />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </Label>
      <Button type="submit">Log In</Button>
    </FormEl>
  );
};
