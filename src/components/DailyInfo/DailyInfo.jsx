import css from "./DailyInfo.module.css";
import ChooseDate from "../ChooseDate/ChooseDate";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterList from "../WaterList/WaterList";
import WaterModal from "../WaterModal/WaterModal";
import { useState } from "react";

const DailyInfo = ({ currentDay }) => {
  const [isAddModalOpen, setAddModalIsOpen] = useState(false);
  const handleAddModalOpen = () => setAddModalIsOpen(true);
  const handleAddModalClose = () => setAddModalIsOpen(false);
  return (
    <div className={css.dailyinfo}>
      <ChooseDate currentDay={currentDay} />
      <AddWaterBtn variant="dailyInfo" onClick={handleAddModalOpen} />
      <WaterList />
      <WaterModal
        modalType="add"
        handleClose={handleAddModalClose}
        isOpen={isAddModalOpen}
      />
    </div>
  );
};

export default DailyInfo;
