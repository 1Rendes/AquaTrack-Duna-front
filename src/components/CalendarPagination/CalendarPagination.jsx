import css from "./CalendarPagination.module.css";
import icons from "../../img/icons.svg";
import { months } from "./../../constants/constants.js";

const CalendarPagination = ({
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
}) => {
  const monthForPagination =
    months[currentMonth.split("-")[1] - 1] + ", " + currentMonth.split("-")[0];

  return (
    <div className={css.calendarpagination}>
      <p>Month</p>
      <div className={css.paginationMonth}>
        <button
          className={css.buttonBackMonth}
          onClick={() => {
            handlePreviousMonth(currentMonth);
          }}
        >
          <svg className={css.iconCalendarLeft}>
            <use href={`${icons}#icon-chevron-down`}></use>
          </svg>
        </button>
        <p>{monthForPagination}</p>
        <button
          className={css.buttonNextMonth}
          onClick={() => {
            handleNextMonth(currentMonth);
          }}
        >
          <svg className={css.iconCalendarRight}>
            <use href={`${icons}#icon-chevron-down`}></use>
          </svg>
        </button>

        <button className={css.showStatisticsButton}>
          <svg className={css.iconPieChart}>
            <use href={`${icons}#icon-pie-chart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
