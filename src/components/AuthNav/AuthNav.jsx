import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authLinks}>
      <NavLink to="/login" className={css.link}>
        Log in
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;
