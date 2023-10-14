import { register } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, FormEl, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormEl onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" autoComplete="username" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" autoComplete="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" autoComplete="new-password" />
      </Label>
      <Button type="submit">Register</Button>
    </FormEl>
  );
};
