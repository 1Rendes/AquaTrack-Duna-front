import PropTypes from "prop-types";
//import { useState, useEffect } from "react";


//import icons from "../../img/icons.svg";
import icons from "../Calendar/betaico.svg";

//import icons from "../../img/icons.svg";
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

  //const [click, setClick] = useState(false)

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
      >
        {!isActiveBtn ? (
          <svg className={css["btn-btn"]} width={18} height={18}>
            <use href={`${icons}#icon-chevron-left`}></use>
        </svg>
        ):(
          <svg className={css["btn-btn1"]} width={18} height={18}>
            <use href={`${icons}#icon-chevron-left`}></use>
        </svg>
        )}

        

      </button>
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
      >
        {!isActiveBtn ? (
          <svg className={css["btn-btn"]} width={18} height={18}>
            <use href={`${icons}#icon-chevron-right`}></use>
        </svg>
        ):(
          <svg className={css["btn-btn1"]} width={18} height={18}>
            <use href={`${icons}#icon-chevron-right`}></use>
            </svg>
            
        )}
        
      </button>

      <button className={css["show-stats"]} onClick={showStatistics}>
        {isActiveBtn ? (
          <svg className={css["statistics"]} width={24} height={24}>
            <use href={`${icons}#icon-pie-chart-03`}></use>
        </svg>
        ):(
          <svg className={css["statistics"]} width={24} height={24}>
            <use href={`${icons}#icon-pie-chart-03-active`}></use>
        </svg>
        )}
        
        
      </button>
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
