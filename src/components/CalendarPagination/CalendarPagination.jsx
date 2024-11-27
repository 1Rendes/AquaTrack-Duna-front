import PropTypes from "prop-types";
//import { useState, useEffect } from "react";


///////////////////import SvgIcon from "../../SvgIcon/SvgIcon";
//import PropTypes from "prop-types";
import css from "./CalendarPagination.module.css";


//import SvgIcon from "../../SvgIcon/SvgIcon";

const CalendarPagination = ({
  data,
  isActiveBtn,
  changeMonth,
  showStatistics,
}) => {
  const getMonthName = (monthNumber) => {
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

    return months[monthNumber - 1] || "Invalid month";
  };

  const prevMonth = () => {
    changeMonth({ prev: true });
  };

  const nextMonth = () => {
    changeMonth({ next: true });
  };

  return (
    <div className={css.container}>
      <button
        disabled={!isActiveBtn}
        className={css["month-back"]}
        onClick={prevMonth}
      >prevMonth</button>
      <p className={css.date}>
        {isActiveBtn
          ? getMonthName(data.month)
          : getMonthName(new Date().getMonth() + 1)}
        , {data.year}
      </p>
      <button
        disabled={!isActiveBtn}
        className={css["month-next"]}
        onClick={nextMonth}
      >nextMonth</button>
      <button className={css["show-stats"]} onClick={showStatistics}>Show Statistics</button>
    </div>
  );
};

CalendarPagination.propTypes = {
  data: PropTypes.object.isRequired,
  isActiveBtn: PropTypes.bool.isRequired,
  changeMonth: PropTypes.func.isRequired,
  showStatistics: PropTypes.func.isRequired,
};

export default CalendarPagination;
