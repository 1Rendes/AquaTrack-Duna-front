import clsx from "clsx";
import css from "./CalendarItem.module.css";

const CalendarItem = ({
  choosenDay,
  setChoosenDay,
  day,
  percentage,
  today,
  todayPercentage,
}) => {
  const numericDay = parseInt(day.split("-")[2]);
  const renderPercentage = Math.floor(
    percentage === todayPercentage
      ? percentage
      : todayPercentage && day === today
      ? todayPercentage
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
