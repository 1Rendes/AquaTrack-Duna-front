import clsx from "clsx";
import icons from "../../img/icons.svg";
import { useState } from "react";
// import WaterModal from "../WaterModal/WaterModal.jsx";
import css from "./AddWaterBtn.module.css";
const AddWaterBtn = ({ variant, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    onClick();
  };
  return (
    <>
      <button
        className={clsx(
          variant === "mainInfo" && css.main,
          variant === "dailyInfo" && css.daily
        )}
        onClick={handleClick}
        // onClick={() => onClick("add")}
      >
        <div className={css.svgWaterBtn}>
          <svg>
            <use href={`${icons}#icon-plus`}></use>
          </svg>
        </div>
        Add Water
      </button>
      {isModalOpen && <div>Модалка відкрита!</div>}
    </>
  );
};

export default AddWaterBtn;
