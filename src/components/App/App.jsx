import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { fetchContacts } from 'components/redux/operations';
import { Layout } from 'components/Layout/Layout';
import HomePage from 'Pages/HomePage/HomePage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import LoginPage from 'Pages/Login/Login';
import ContactsPage from 'Pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
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
