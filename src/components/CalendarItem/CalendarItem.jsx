import clsx from "clsx";
import css from "./CalendarItem.module.css";
import { selectPercentage } from "../../redux/water/selectors";
import { useSelector } from "react-redux";

const CalendarItem = ({
  choosenDay,
  setChoosenDay,
  day,
  percentage,
  today,
}) => {
  const numericDay = parseInt(day.split("-")[2]);
  const currentDayPercentage = useSelector(selectPercentage);
  const renderPercentage = Math.floor(
    percentage
      ? percentage
      : currentDayPercentage && day === today
      ? currentDayPercentage
      : 0
  );
  return (
    <>
      <button
        className={clsx(
          css.calendaritem,
          (day === choosenDay && css.choosenDay) ||
            (day === today && css.currentDay),
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
