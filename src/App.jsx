import { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import { currentUser } from './redux/auth/operations.js';
import {
  selectAuthIsLoading,
  selectIsLoggedIn,
} from './redux/auth/selectors.js';
import './styles/common.css';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage.jsx'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage.jsx'));

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthIsLoading);

  useEffect(() => {
    if (!isLoggedIn) dispatch(currentUser());
  }, []);

  return (
    <>
      <SharedLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/signup"
                element={
                  <RestrictedRoute
                    redirectTo="/tracker"
                    component={<SignUpPage />}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <RestrictedRoute
                    redirectTo="/tracker"
                    component={<SignInPage />}
                  />
                }
              />
              <Route
                path="/tracker"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<TrackerPage />}
                  />
                }
              />
              <Route
                path="/send-reset-email"
                element={<ForgotPasswordPage />}
              />
              <Route path="/reset-pwd" element={<ResetPasswordPage />} />

              <Route
                path="*"
                element={
                  <RestrictedRoute
                    redirectTo="*"
                    component={<NotFoundPage />}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </>
        )}
      </SharedLayout>
      <Toaster
        toastOptions={{
          style: {
            background: 'var(--main-white)',
            color: 'var(--main-text)',
            fontFamily: 'var(--font-family)',
            border: '1px solid var(--main)',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: 'var(--accent)',
              secondary: 'var(--main-white)',
            },
          },
          error: {
            style: {
              background: 'var(--error)',
              color: 'var(--main-white)',
            },
            iconTheme: {
              primary: 'var(--main-white)',
              secondary: 'var(--error)',
            },
          },
        }}
      />
    </>
  );
};

export default App;
