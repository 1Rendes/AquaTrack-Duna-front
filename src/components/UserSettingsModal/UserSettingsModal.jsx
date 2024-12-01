// import PerfectScrollbar from "react-perfect-scrollbar";
// import "react-perfect-scrollbar/dist/css/styles.css";

import Modal from "../Modal/Modal";
import css from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";

const SettingsModal = ({ handleClose, isOpen }) => {
  return (
    // <PerfectScrollbar
    //   style={{
    //     height: "100%",
    //     // width: "865px",
    //     overflowY: "auto",
    //     overflowX: "none",
    //     right: 0,
    //   }}
    // >
    <Modal handleClose={handleClose} isOpen={isOpen} modalType="settings">
      <div className={css.settingsModal}>
        <h2 className={css.titleOfModal}>Setting</h2>
        <UserSettingsForm onClose={handleClose} />
      </div>
    </Modal>
    // </PerfectScrollbar>
  );
};

export default SettingsModal;
