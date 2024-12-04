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
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className={css.dailyinfo}>
      <div className={css.dateAndButtonContainer}>
        <ChooseDate currentDay={currentDay} />
        {today === currentDay && (
          <AddWaterBtn variant="dailyInfo" onClick={handleAddModalOpen} />
        )}
      </div>
      <WaterList choosenDay={currentDay} />
      <WaterModal
        modalType="add"
        handleClose={handleAddModalClose}
        isOpen={isAddModalOpen}
      />
    </div>
  );
};

export default DailyInfo;
