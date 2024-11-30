import ReactModal from "react-modal";
import css from "./Modal.module.css";
import clsx from "clsx";
import icons from "../../img/icons.svg";

ReactModal.setAppElement("#root");

const Modal = ({ children, handleClose, isOpen, modalType }) => {
  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={css.backdrop}
        className={clsx(css.modal, css[modalType])}
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
      >
        <button onClick={handleClose}>
        <svg className={css.closeIcon} width={28} height={28}>
            <use href={`${icons}#icon-x`}></use>
          </svg>
        </button>
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
