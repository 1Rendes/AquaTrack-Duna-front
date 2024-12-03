import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import css from "./MonthInfo.module.css";

const MonthInfo = ({
  currentDay,
  setCurrentDay,
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
}) => {
  return (
    <div className={css.monthinfo}>
      <CalendarPagination
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
        currentMonth={currentMonth}
      ></CalendarPagination>
      <Calendar
        choosenDay={currentDay}
        setCurrentDay={setCurrentDay}
      ></Calendar>
    </div>
  );
};

export default MonthInfo;
