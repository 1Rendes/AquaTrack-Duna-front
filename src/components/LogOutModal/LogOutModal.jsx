import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import css from './LogOutModal.module.css';
import { logOut } from '../../redux/auth/operations';

const LogOutModal = ({
  handleLogoutModalIsClose,
  // modalType,
  logoutModalIsOpen,
}) => {
  const dispatch = useDispatch();
  return (
    <Modal handleClose={handleLogoutModalIsClose} IsOpen={logoutModalIsOpen}>
      <h1>Log out</h1>
      {/* <h2>{modalType}</h2> */}
      <p>Do you really want to leave?</p>
      <div>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </button>
        <button type='button' onClick={() => {handleLogoutModalIsClose()}}>Cancel</button>
      </div>
    </Modal>
  );
};

export default LogOutModal;
