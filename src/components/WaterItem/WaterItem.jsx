// import { useDispatch } from "react-redux";

// import { DeleteWater } from "../../redux/water/operations";
// import { EditWater } from "../../redux/water/operations";

import css from "./WaterItem.module.css";

const WaterItem = ({ water, time }) => {
  // const dispatch = useDispatch();
  // const handleDeleteWater = () => {
  //   dispatch(DeleteWater(id));
  // };
  // const handleEditWater = () => {
  //   dispatch(EditWater(id));
  // };
  return (
    <div className={css.wateritem}>
      {
        <>
          <div>
            <img
              className={css.img}
              src='../../img/mob_mage_water-glass-fill_1x.png'
              alt="A glass of water"
              // width="38"
              // height="38"
            />
          </div>
          <ul className={css.infoList}>
            <li className={css.waterVolume}>{water}</li>
            <li className={css.infoListTime}>{time}</li>
          </ul>
          <ul className={css.btnList}>
            <li className={css.btnlistItem}>
              <button className={css.btn} type="button">
                {/* // onClick={handleEditWater}> */}
                <svg className={css.icon}>
                  <use href="/sprite.svg#edit-icon"></use>
                </svg>
              </button>
            </li>
            <li className={css.btnlistItem}>
              <button className={css.btn} type="button">
                {/* // onClick={handleDeleteWater} */}
                <svg className={css.icon} height="14">
                  <use href="/sprite.svg#delete-icon"></use>
                </svg>
              </button>
            </li>
          </ul>
        </>
      }
    </div>
  );
};

export default WaterItem;
