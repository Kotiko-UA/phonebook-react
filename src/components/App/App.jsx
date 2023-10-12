import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'Hooks/useAuth';
import { refreshUser } from 'components/redux/auth/operations';
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../Pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../Pages/Login/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" elements={<Layout />}>
        <Route index elements={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
