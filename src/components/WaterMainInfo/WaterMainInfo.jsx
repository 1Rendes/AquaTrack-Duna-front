import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";
import Logo from "../Logo/Logo";
import WaterModal from "../WaterModal/WaterModal";
import { useState } from "react";

const WaterMainInfo = () => {
  const [isAddWaterModalOpen, setAddWaterModalOpen] = useState(false);

  const handleOpenAddWaterModal = () => {
    setAddWaterModalOpen(true);
  };

  const handleCloseAddWaterModal = () => {
    setAddWaterModalOpen(false);
  };
  return (
    <div className={css.watermaininfo}>
      <div className={css.logoContainer}>
        <Logo />
      </div>

      <div className={css.WaterDailyNormaContainer}>
        <WaterDailyNorma />
      </div>
      <div className={css.WaterProgressBarContainer}>
        <WaterProgressBar />
      </div>
      <div className={css.addWaterBtnContainerMainInfo}>
        <AddWaterBtn variant="mainInfo" onClick={handleOpenAddWaterModal} />
      </div>
      <div>
        {isAddWaterModalOpen && (
          <WaterModal
            modalType="add"
            isOpen={isAddWaterModalOpen}
            handleClose={handleCloseAddWaterModal}
          ></WaterModal>
        )}
      </div>
    </div>
  );
};

export default WaterMainInfo;
