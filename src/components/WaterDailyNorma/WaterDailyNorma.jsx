import css from "./WaterDailyNorma.module.css";

const WaterDailyNorma = () => {
  const dailyNorm = 1.5;

  return (
    <div className={css.waterdailynorma}>
      <div className={css.valueWaterNorma}>{dailyNorm} L</div>
      <div className={css.descriptionWaterNorma}>My daily norma</div>
    </div>
  );
};

export default WaterDailyNorma;
