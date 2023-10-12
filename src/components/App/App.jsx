import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
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
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <Suspense fallback={<div>Loading...</div>}>
                  <RegisterPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <Suspense fallback={<div>Loading...</div>}>
                  <LoginPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContactsPage />
                </Suspense>
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};
