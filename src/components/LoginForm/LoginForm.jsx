import { logIn } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
