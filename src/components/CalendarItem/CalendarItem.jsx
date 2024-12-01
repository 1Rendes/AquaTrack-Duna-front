import clsx from "clsx";
import css from "./CalendarItem.module.css";
import { selectPercentage } from "../../redux/water/selectors";
import { useSelector } from "react-redux";

const CalendarItem = ({ choosenDay, setChoosenDay, day, percentage }) => {
  const numericDay = parseInt(day.split("-")[2]);
  const currentDay = new Date().toISOString().split("T")[0];
  const currentDayPercentage = useSelector(selectPercentage);
  const renderPercentage = Math.floor(
    currentDay === day && currentDayPercentage
      ? currentDayPercentage
      : percentage
  );
  return (
    <>
      <button
        className={clsx(
          css.calendaritem,
          (day === choosenDay && css.choosenDay) ||
            (day === currentDay && css.currentDay),
          renderPercentage === 100 && css.filled
        )}
        onClick={() => {
          setChoosenDay(day);
        }}
      >
        <p>{numericDay}</p>
      </button>
      <p className={css.percentage}>{renderPercentage + "%"}</p>
    </>
  );
};

export default CalendarItem;
