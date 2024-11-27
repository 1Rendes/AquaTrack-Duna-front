import ReactModal from "react-modal";
import css from "./Modal.module.css";

const Modal = ({ children, handleClose, IsOpen }) => {
  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={css.backdrop}
        className={css.modal}
        isOpen={IsOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
      >
        <button onClick={handleClose}>Х</button>
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
