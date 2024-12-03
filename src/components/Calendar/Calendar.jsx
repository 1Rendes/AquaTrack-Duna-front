import { useSelector } from "react-redux";
import {
  selectMonthWater,
  selectTodayPercentage,
} from "../../redux/water/selectors";
import css from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";
import { useState } from "react";
import { useEffect } from "react";

const Calendar = ({ choosenDay, setCurrentDay }) => {
  const choosenMonth = useSelector(selectMonthWater);
  const todayPercentage = useSelector(selectTodayPercentage);
  // const [day, setDay] = useState(choosenDay);
  const today = new Date().toISOString().split("T")[0];
  // useEffect(() => {
  //   setDay(choosenDay);
  // }, [choosenDay]);
  return (
    <ul className={css.calendar}>
      {choosenMonth.map((day) => {
        return (
          <li key={day.day} className={css.calendarItem}>
            <CalendarItem
              today={today}
              day={day.day}
              percentage={day.percentage}
              todayPercentage={todayPercentage}
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
