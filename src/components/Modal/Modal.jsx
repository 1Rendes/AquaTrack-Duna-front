import ReactModal from "react-modal";
import css from "./Modal.module.css";

ReactModal.setAppElement("#root");

const Modal = ({ children, handleClose, isOpen }) => {
  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={css.backdrop}
        className={css.modal}
        isOpen={isOpen}
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
