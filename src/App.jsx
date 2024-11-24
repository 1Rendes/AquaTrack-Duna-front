
// import { useDispatch, useSelector } from "react-redux";
// import { lazy, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import { refreshUser } from "./redux/auth/operations";
// import SharedLayout from "./components/SharedLayout.jsx";

import "./styles/common.css";
import { Routes, Route } from "react-router-dom";
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
  
  
  // return <div className="app-common"> 
  // </div>;
};

export default App;
