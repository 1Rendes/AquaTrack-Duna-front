// import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
// import { useState } from "react";
import AddWaterBtn  from "../AddWaterBtn/AddWaterBtn";
import css from "./WaterList.module.css";

const WaterList = ({ filteredWater }) => {
  //   const filteredWater = useSelector(selectFilteredWater);
        //   const water = useSelector(selectWater);
  return (
    <div className={css.waterlist}>
      <div className={css.waterlistTitle}>
        <p className={css.waterlistDay}>Today</p>

        <div className={css.waterlistBtn}>
          {/* <button
            className={css.waterlistAddbtn}
            type="button"
            onClick={AddWaterBtn}
          > */}

          {/* <svg className={css.icon}>
              <use href="/sprite.svg#edit-icon"></use>
            </svg> */}
          {/* </button> */}
          <AddWaterBtn />
          <span className={css.waterlistBtnText}>Add water</span>
        </div>
      </div>

      <ul className={css.waterlistPortions}>
        {/* {water.length === 0 && (
            <p>Тo information on water consumption for the selected day</p>
          )} */}

        {filteredWater.map(({ id, water, time }) => (
          <li className={css.item} key={id}>
            <WaterItem water={water} time={time} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaterList;
