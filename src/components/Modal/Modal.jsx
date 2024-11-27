import ReactModal from "react-modal";
import css from "./Modal.module.css";

const Modal = ({ children, handleLogoutModalIsClose, logoutModalIsOpen }) => {
  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={css.backdrop}
        className={css.modal}
        isOpen={logoutModalIsOpen}
        onRequestClose={handleLogoutModalIsClose}
        ariaHideApp={false}
      >
        <button onClick={handleLogoutModalIsClose}>Х</button>
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
