import { useSelector } from "react-redux";
import { selectMonthWater } from "../../redux/water/selectors";
import css from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ currentDay, setCurrentDay }) => {
  const choosenMonth = useSelector(selectMonthWater);

  return (
    <ul className={css.calendar}>
      {choosenMonth.map((day) => {
        return (
          <li key={day.day} className={css.calendarItem}>
            <CalendarItem
              day={day.day}
              percentage={day.percentage}
              choosenDay={currentDay}
              setChoosenDay={setCurrentDay}
            ></CalendarItem>
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
