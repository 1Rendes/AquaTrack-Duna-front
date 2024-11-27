import { selectDayWater } from "../../redux/water/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addWater } from "../../redux/water/operations";
import WaterItem from "../WaterItem/WaterItem";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import css from "./WaterList.module.css";
import { useState } from "react";
import WaterModal from "../WaterModal/WaterModal";

const WaterList = () => {
  const dispatch = useDispatch();
  const dayWaterList = useSelector(selectDayWater) || []; // Защита от undefined/null
  const [addWaterModalIsOpen, setAddWaterIsOpen] = useState(false);

  const handleAddWaterClick = () => setAddWaterIsOpen(true);
  const handleCloseAddWaterModal = () => setAddWaterIsOpen(false);

  const handleAddWater = (updatedData) => {
    dispatch(addWater({ ...updatedData }));
    setAddWaterIsOpen(false);
  };

  return (
    <div className={css.waterlist}>
      <div className={css.waterlistTitle}>
        <div className={css.waterlistDay}>
          <p>Today</p>
        </div>
        <div className={css.waterlistBtn} onClick={handleAddWaterClick}>
          <AddWaterBtn variant={"dailyInfo"} />
        </div>
      </div>

      <ul className={css.waterlistPortions}>
        {dayWaterList.length === 0 ? (
          <p>No information on water consumption for the selected day</p>
        ) : (
          dayWaterList.map(({ id, water, time }) => (
            <li className={css.item} key={id}>
              <WaterItem water={water} time={time} />
            </li>
          ))
        )}
      </ul>

      {addWaterModalIsOpen && (
        <WaterModal
          handleClose={handleCloseAddWaterModal}
          onAdd={handleAddWater}
        />
      )}
    </div>
  );
};

export default WaterList;
