import css from "./UserBarPopover.module.css";
import icons from "../../img/icons.svg";

const UserBarPopover = ({
  handleSettingsModalIsOpen,
  handleLogoutModalIsOpen,
}) => {
  return (
    <>
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
