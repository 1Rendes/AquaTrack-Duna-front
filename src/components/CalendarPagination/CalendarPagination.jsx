import css from "./CalendarPagination.module.css";
import icons from "../../img/icons.svg";

const CalendarPagination = ({
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
  handleOpenGraphic,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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

        <button
          className={css.showStatisticsButton}
          onClick={handleOpenGraphic}
        >
          <svg className={css.iconPieChart}>
            <use href={`${icons}#icon-pie-chart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
