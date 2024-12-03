import css from "./WaterProgressBar.module.css";
import icons from "../../img/icons.svg";
import { useSelector } from "react-redux";
import { selectTodayPercentage } from "../../redux/water/selectors";

const WaterProgressBar = () => {
  const progress = useSelector(selectTodayPercentage);

  const isValidProgress = () => {
    return progress !== 0 && progress !== 50 && progress !== 100;
  };

  return (
    <div className={css.waterProgressBarContainer}>
      <div className={css.todayLabel}>Today</div>

      <div className={css.progressBarWrapper}>
        <div className={css.progressBar}>
          <div className={css.progress} style={{ width: `${progress}%` }}></div>
        </div>

        {isValidProgress() && (
          <div
            className={css.dynamicLabel}
            style={{
              left: `${progress}%`,
            }}
          >
            {progress}%
          </div>
        )}
        <svg
          className={css.icon}
          style={{
            left: `${progress}%`,
          }}
        >
          <use href={`${icons}#icon-circle`}></use>
        </svg>
      </div>

      <div className={css.labels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;
