import { useSelector } from "react-redux";
import css from "./WaterDailyNorma.module.css";
import { selectUser } from "../../redux/auth/selectors";

const WaterDailyNorma = () => {
  const dailyNorm = useSelector(selectUser);

  return (
    <div className={css.waterdailynorma}>
      <div className={css.valueWaterNorma}>{dailyNorm.dailyRequirement} ml</div>
      <div className={css.descriptionWaterNorma}>My daily norma</div>
    </div>
  );
};

export default WaterDailyNorma;
