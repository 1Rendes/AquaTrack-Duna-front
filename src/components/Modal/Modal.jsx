import closeBtn from '../../assets/Modal/modalCloseBtn.svg';
        import css from './Modal.module.css';

        const Modal = ({children, onClose}) => {
        return (
                <div className={css.backdrop}>
                        <div className={css.modal}>
                                <div className={css.modalContent}>
                                <button className={css.closeBtn} onClick={() => onClose()}>
                                        <img src={closeBtn} alt="close" />
                                        </button>
                                        {children}
                                        
                                
                        </div>
                         </div>
                </div>
        );
        };

        export default Modal;
        