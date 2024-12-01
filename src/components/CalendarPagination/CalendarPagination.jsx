import css from "./CalendarPagination.module.css";

const CalendarPagination = ({
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
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
          onClick={() => {
            handlePreviousMonth(currentMonth);
          }}
        >
          {"<"}
        </button>
        <p>{monthForPagination}</p>
        <button
          onClick={() => {
            handleNextMonth(currentMonth);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
