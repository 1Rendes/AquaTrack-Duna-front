import { useEffect, useRef, useState } from "react";
import UserBarPopover from "../UserBarPopover/UserBarPopover";
import icons from "../../img/icons.svg";
import css from "./UserBar.module.css";

const UserBar = ({ userName, userPhoto }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
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
          <UserBarPopover onClose={() => setIsPopoverOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default UserBar;
