import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../SvgIcon/SvgIcon';
import css from './CalendarPagination.module.css';
import { useTranslation } from 'react-i18next';

const CalendarPagination = ({ data }) => {
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
    console.log("Change to prev month");
  };
  const nextMonth = () => {
    console.log("Change to next month");
  };
  
  return (
    <div className={css.container}>
      <button className={css["month-back"]} onClick={prevMonth}></button>
      <p className={css.date}>
        {getMonthName(data.month)}, {data.year}
      </p>
      <button className={css["month-next"]} onClick={nextMonth}></button>
    </div>
  );
};

CalendarPagination.propTypes = {
  data: PropTypes.object,
};

export default CalendarPagination;