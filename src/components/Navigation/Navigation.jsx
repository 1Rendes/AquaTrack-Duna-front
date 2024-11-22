import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const classBuilder = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <nav className={css.container}>
      <NavLink to="/" className={classBuilder}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={classBuilder}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
