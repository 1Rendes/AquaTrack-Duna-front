<<<<<<< Updated upstream
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
=======
        import closeBtn from '../../assets/logOut/closeBtn.svg'
        import css from './Modal.module.css';

const Modal = ({ children }) => {
                
        return (
                <div className={css.backdrop}>
                 <div className={css.modal}>
                   <button className={css.modalCloseBtn}>
                   <img src={closeBtn} alt="closeBtn" />
                   </button>                           
                   {children}
                  </div>           
>>>>>>> Stashed changes
                </div>
        );
        };

        export default Modal;
        