import { useSelector } from "react-redux";
import { selectMonthWater } from "../../redux/water/selectors";
import css from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ choosenDay, setCurrentDay }) => {
  const choosenMonth = useSelector(selectMonthWater);
  const today = new Date().toISOString().split("T")[0];

  return (
    <ul className={css.calendar}>
      {choosenMonth.map((day) => {
        return (
          <li key={day.day} className={css.calendarItem}>
            <CalendarItem
              today={today}
              day={day.day}
              percentage={day.percentage}
              choosenDay={choosenDay}
              setChoosenDay={setCurrentDay}
            ></CalendarItem>
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
