import clsx from "clsx";
import css from "./CalendarItem.module.css";
import { useSelector } from "react-redux";
import { selectPercentage } from "../../redux/water/selectors";

const CalendarItem = ({ choosenDay, setChoosenDay, day, percentage }) => {
  const numericDay = parseInt(day.split("-")[2]);
  const currentDay = new Date().toISOString().split("T")[0];
  const currentDayPercentage = useSelector(selectPercentage);
  const renderPercentage =
    currentDay === day ? currentDayPercentage : percentage;
  return (
    <>
      <button
        className={clsx(
          css.calendaritem,
          (day === choosenDay && css.choosenDay) ||
            (day === currentDay && css.currentDay)
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
