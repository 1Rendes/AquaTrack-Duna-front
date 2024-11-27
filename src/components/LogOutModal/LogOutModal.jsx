import Modal from "../Modal/Modal";
import css from "./LogOutModal.module.css";

const LogOutModal = ({
  handleLogoutModalIsClose,
  modalType,
  logoutModalIsOpen,
}) => {
  return (
    <Modal
      handleLogoutModalIsClose={handleLogoutModalIsClose}
      logoutModalIsOpen={logoutModalIsOpen}
    >
      <h1>hallo</h1>
      <h2>{modalType}</h2>
      <p>3143241</p>
    </Modal>
  );
};

export default LogOutModal;
