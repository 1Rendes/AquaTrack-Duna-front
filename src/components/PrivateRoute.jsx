import { useSelector } from "react-redux";

import { Navigate } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
