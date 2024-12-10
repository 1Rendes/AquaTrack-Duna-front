import ReactModal from "react-modal";
import css from "./Modal.module.css";
import clsx from "clsx";
import icons from "../../img/icons.svg";
import { useEffect } from "react";

ReactModal.setAppElement("#root");

const Modal = ({ children, handleClose, isOpen, modalType }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);

  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={css.backdrop}
        className={clsx(css.modal, css[modalType])}
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
      >
        <button onClick={handleClose} className={css.button}>
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
