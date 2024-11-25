import css from "./Modal.module.css";

const Modal = ({ children }) => {
  return <div className={css.modal}>{children}</div>;
};

export default Modal;
