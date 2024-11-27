import clsx from "clsx";
import icons from "../../img/icons.svg";
import css from "./AddWaterBtn.module.css";
const AddWaterBtn = ({ variant, onClick }) => {
  return (
    <>
      <button
        className={clsx(
          variant === "mainInfo" && css.main,
          variant === "dailyInfo" && css.daily
        )}
        onClick={onClick}
      >
        <div className={css.svgWaterBtn}>
          <svg>
            <use href={`${icons}#icon-plus`}></use>
          </svg>
        </div>
        Add Water
      </button>
    </>
  );
};

export default AddWaterBtn;
