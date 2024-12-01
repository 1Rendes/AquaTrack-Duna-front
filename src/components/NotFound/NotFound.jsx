import { Link } from "react-router-dom";
import css from "./NotFound.module.css";
import Logo from "../Logo/Logo";

const NotFound = () => {
  return (
    <div className={css.notFoundPageBox}>
      <div className={css.logoWrapper}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={css.notFound404Box}>404</div>
      <div className={css.notFoundTextBox}>
        <h1 className={css.notFoundTitle}>Page Not Found</h1>
        <p className={css.notFoundLooks}>Looks like you got lost...</p>
        <p className={css.notFoundSorry}>
          Sorry, the page you are looking for could be not found.
        </p>
        <Link className={css.notFoundLink} to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
