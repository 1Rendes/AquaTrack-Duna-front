import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import css from "./LogOutModal.module.css";
import { logOut } from "../../redux/auth/operations";
import CancelButton from "../CancelButton/CancelButton";
import { useEffect } from "react";

const LogOutModal = ({ handleLogoutModalIsClose, logoutModalIsOpen }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);

  const dispatch = useDispatch();
  return (
    <Modal
      handleClose={handleLogoutModalIsClose}
      isOpen={logoutModalIsOpen}
      logOut={logoutModalIsOpen}
      modalType="logOut"
    >
      <div className={css.logOutModal}>
        <h2 className={css.titleOfModal}>Log out</h2>
        {/* <h2>{modalType}</h2> */}
        <p className={css.description}>Do you really want to leave?</p>
        <div className={css.btnsBox}>
          <button
            className={css.logOutBtn}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Log out
          </button>
          <CancelButton handleFunc={handleLogoutModalIsClose} />
          {/* <button className={css.cancelBtn}
          type="button"
          onClick={() => {
            handleLogoutModalIsClose();
          }}
        >
          Cancel
        </button> */}
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
