import css from "./HomeWraper.module.css";

const HomeWrapper = ({ children }) => {
  return (
    <div className={css.wrapper}>
      {children}
    </div>
  );
};

export default HomeWrapper;