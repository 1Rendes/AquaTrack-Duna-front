import css from "./HomeWrapper.module.css";

const HomeWrapper = ({ children }) => {
  return (
    <div className={css.wrapper}>
      {children}
    </div>
  );
};

export default HomeWrapper;