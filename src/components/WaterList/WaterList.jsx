import { selectDayWater } from "../../redux/water/selectors";
import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
// import { useState } from "react";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import css from "./WaterList.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import WaterModal from "../WaterModal/WaterModal";

const WaterList = () => {
  const dayWaterList = useSelector(selectDayWater);
  const [addWaterModalIsOpen, setAddWaterIsOpen] = useState(false);

  const handleAddWaterClick = () => setAddWaterIsOpen(true);
   const handleCloseAddWaterModal = () => setAddWaterIsOpen(false);
  
 
  return (
    <div className={css.waterlist}>
      <div className={css.waterlistTitle}>
        <p className={css.waterlistDay}>Today</p>

        <div className={css.waterlistBtn} onClick={handleAddWaterClick}>
          <AddWaterBtn />
          <span className={css.waterlistBtnText}>Add water</span>
        </div>
      </div>

      <ul className={css.waterlistPortions}>
        {dayWaterList.length === 0 && (
          <p>No information on water consumption for the selected day</p>
        )}

        {dayWaterList.map(({ id, water, time }) => (
          <li className={css.item} key={id}>
            <WaterItem water={water} time={time} />
          </li>
        ))}
      </ul>
      {addWaterModalIsOpen && (
        <Modal>
          <WaterModal handleClose={handleCloseAddWaterModal}/>
        </Modal>
      )}
    </div>
  );
};

export default WaterList;
