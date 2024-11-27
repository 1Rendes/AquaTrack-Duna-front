import { useState } from "react";
import css from "./UserBarPopover.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import icons from "../../img/icons.svg";

const UserBarPopover = ({ onClose }) => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  const handleSettingsModalIsOpen = () => {
    setSettingsModalIsOpen(true);
    console.log("Open settings modal");
    onClose();
  };

  const handleSettingsModalIsClosed = () => {
    setSettingsModalIsOpen(false);
  };

  const handleLogoutModalIsOpen = () => {
    setLogoutModalIsOpen(true);
    console.log("Open log out modal");
    onClose();
  };
  const handleLogoutModalIsClose = () => {
    setLogoutModalIsOpen(false);
  };
  return (
    <>
      {settingsModalIsOpen && (
        <UserSettingsModal handleModalClose={handleSettingsModalIsClosed} />
      )}
      {logoutModalIsOpen && (
        <LogOutModal handleModalClose={handleLogoutModalIsClose} />
      )}
      <div className={css.userbarpopover}>
        <button
          className={css.popoverButton}
          onClick={handleSettingsModalIsOpen}
        >
          <svg className={css.popoverIcon} width={16} height={16}>
            <use href={`${icons}#icon-settings`}></use>
          </svg>
          Settings
        </button>
        <button className={css.popoverButton} onClick={handleLogoutModalIsOpen}>
          <svg className={css.popoverIcon} width={16} height={16}>
            <use href={`${icons}#icon-log-out`}></use>
          </svg>
          log out
        </button>
      </div>
    </>
  );
};

export default UserBarPopover;
