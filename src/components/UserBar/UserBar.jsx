import { useEffect, useRef, useState } from "react";
import UserBarPopover from "../UserBarPopover/UserBarPopover";
import icons from "../../img/icons.svg";
import css from "./UserBar.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
import LogOutModal from "../LogOutModal/LogOutModal";

const UserBar = ({ userName, userPhoto }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  const togglePopover = () => setIsPopoverOpen((prev) => !prev);
  const closePopover = () => setIsPopoverOpen(false);

  const handleClickOutside = (e) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(e.target) &&
      !popoverRef.current.contains(e.target)
    ) {
      closePopover();
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isPopoverOpen]);

  const handleSettingsModalIsOpen = () => {
    setSettingsModalIsOpen(true);
    setIsPopoverOpen(false);
    console.log("Open settings modal");
  };

  const handleSettingsModalIsClosed = () => {
    setSettingsModalIsOpen(false);
  };

  const handleLogoutModalIsOpen = () => {
    setLogoutModalIsOpen(true);
    setIsPopoverOpen(false);
  };

  const handleLogoutModalIsClose = () => {
    setLogoutModalIsOpen(false);
  };
  const firstLetter = userName ? userName.slice(0, 1) : "";

  return (
    <div className={css.userbar}>
      <button
        ref={buttonRef}
        onClick={togglePopover}
        type="button"
        className={css.userBarButton}
      >
        <span className={css.userBarName}>{userName}</span>

        {!userPhoto ? (
          <span className={css.userBarInitial}>{firstLetter}</span>
        ) : (
          <img
            src={userPhoto}
            alt={`${userName} photo`}
            className={css.userBarPhoto}
          />
        )}
        {!isPopoverOpen ? (
          <svg className={css.userBarVectorDown} width={12} height={8}>
            <use href={`${icons}#icon-vector-down`}></use>
          </svg>
        ) : (
          <svg className={css.userBarVectorDown} width={12} height={8}>
            <use href={`${icons}#icon-vector-up`}></use>
          </svg>
        )}
      </button>
      {isPopoverOpen && (
        <div ref={popoverRef}>
          <UserBarPopover
            handleLogoutModalIsOpen={handleLogoutModalIsOpen}
            handleSettingsModalIsOpen={handleSettingsModalIsOpen}
          />
        </div>
      )}
      {settingsModalIsOpen && (
        <UserSettingsModal handleModalClose={handleSettingsModalIsClosed} />
      )}
      {logoutModalIsOpen && (
        <LogOutModal
          handleLogoutModalIsClose={handleLogoutModalIsClose}
          logoutModalIsOpen={logoutModalIsOpen}
        />
      )}
    </div>
  );
};

export default UserBar;
