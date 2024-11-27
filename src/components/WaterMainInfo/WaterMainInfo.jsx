import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";

const WaterMainInfo = ({ onClick }) => {
  return (
    <div className={css.watermaininfo}>
      <p className={css.example}>WaterMainInfo</p>

      <div className={css.WaterDailyNormaContainer}>
        <WaterDailyNorma />
      </div>
      <div className={css.WaterProgressBarContainer}>
        <WaterProgressBar />
      </div>
      <div className={css.addWaterBtnContainerMainInfo}>
        <AddWaterBtn variant={"mainInfo"} onClick={onClick} />
      </div>
    </div>
  );
};

export default WaterMainInfo;
