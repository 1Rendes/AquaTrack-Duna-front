import "./styles/common.css";
import { Routes, Route } from "react-router";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const SignInPage = lazy(() => import("./pages/SignInPage.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.jsx"));
const TrackerPage = lazy(() => import("./pages/TrackerPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

const App = () => {
  return (
    <>
      <SharedLayout>
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
              <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />
          <Route
            path="*"
            element={
              <RestrictedRoute redirectTo="*" component={<NotFoundPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
      <Toaster
        toastOptions={{
          style: {
            background: "var(--main-white)",
            color: "var(--main-text)",
            fontFamily: "var(--font-family)",
            border: "1px solid var(--main)",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "var(--accent)",
              secondary: "var(--main-white)",
            },
          },
          error: {
            style: {
              background: "var(--error)",
              color: "var(--main-white)",
            },
            iconTheme: {
              primary: "var(--main-white)",
              secondary: "var(--error)",
            },
          },
        }}
      />
    </>
  );
};

export default App;
