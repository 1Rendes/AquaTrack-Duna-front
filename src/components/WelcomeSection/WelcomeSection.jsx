import { Link } from "react-router-dom";
import css from "./WelcomeSection.module.css";
import Logo from "../Logo/Logo";
const WelcomeSection = () => {
  return (
    <div className={css.welcomesection}>
      <Logo />
      <div className={css.titleSection}>
        <p className={css.subtitle}>Record daily water intake and track</p>
        <h1 className={css.title}>Water consumption tracker</h1>
        <div className={css.buttons}>
          <Link className={css.tracker} to="/signup">
            Try tracker
          </Link>
          <Link className={css.singUp} to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

