import Modal from "../Modal/Modal";
import css from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";

const SettingsModal = ({ handleClose, isOpen }) => {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen} modalType="settings">
      <div className={css.settingsModal}>
        <h2 className={css.titleOfModal}>Setting</h2>
        <UserSettingsForm onClose={handleClose} />
      </div>
    </Modal>
  );
};

export default SettingsModal;
