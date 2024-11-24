import { useEffect } from "react";
import Modal from "../Modal/Modal";
//import css from './LogOutModal.module.css';
// import { Formik, Form } from 'formik';

const LogOutModal = ({ isOpen, onClose, children }) => {
        useEffect(() => {
                const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                                onClose();
                        }
                };

                document.addEventListener('keydown', handleEscape);
        return ()=> document.removeEventListener('keydown', handleEscape);
        }, [onClose]);
        if (!isOpen) return null;

             
                return (
                        <>
                                {isOpen ? (<Modal>{children} </Modal>) : onClose}
                        </>
                
                // <Modal>
                        
                //         <h2 className={css.logoutmodalTitle}>Log Out</h2>
                //         <p className={css.logoutmodalText}>Are you sure you want to log out?</p>
                //         <Formik initialValues={{}} onSubmit={handleLogOut}>
                //                 {({isSubmitting}) => (
                //                         <Form className={css.buttonContainer}>
                //                                 <button type="submit" className={css.logoutBtn} disabled={isSubmitting}>Log Out</button>
                //                                 <button type="button" className={css.cancelBtn}  onClick={onClose}>Cancel</button>
                //                         </Form>
                //                 )}

                //         </Formik>
                // </Modal>
                );
};

        export default LogOutModal;
        