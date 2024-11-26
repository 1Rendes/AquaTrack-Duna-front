
import { useEffect } from 'react';
import closeBtn from '../../assets/Modal/modalCloseBtn.svg';
import css from './Modal.module.css';

const Modal = ({ children, isOpen, onClose }) => {
useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
        return (
                <div className={css.backdrop} onClick={handleOverlayClick}>
                        <div className={css.modal}>
                                <div className={css.modalContent}>
                                        <button className={css.closeBtn} onClick={onClose}>
                                                <img src={closeBtn} alt="close" />
                                        </button>
                                        {children}
                                        
                                
                                </div>
                        </div>

                </div>)
}

        export default Modal;
        