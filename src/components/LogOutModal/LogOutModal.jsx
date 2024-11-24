
        import Modal from '../Modal/Modal';
import css from './LogOutModal.module.css';

        const LogOutModal = () => {
        return (
                <Modal>
                        <h2 className={css.logoutmodalTitle}>Log Out</h2>
                        <p className={css.logoutmodalText}>Are you sure you want to log out?</p>
                </Modal>
                );
};

        export default LogOutModal;
        
