import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";
import Logo from "../Logo/Logo";

const WaterMainInfo = ({ onClick }) => {
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
        <AddWaterBtn variant={"mainInfo"} onClick={onClick} />
      </div>
    </div>
  );
};

export default WaterMainInfo;
