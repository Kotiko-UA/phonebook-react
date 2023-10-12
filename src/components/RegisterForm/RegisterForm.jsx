import { register } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" autoComplete="username" />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="new-password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
