//import React from 'react';
import PropTypes from 'prop-types';
import css from './CalendarItem.module.css';
//import { useDispatch } from 'react-redux';

const concaniteClasses = (str1, str2) => {
  return `${str1} ${str2}`;
};

const CalendarItem = ({ item, isToday }) => {
  const showStat = (date) => {
    console.log(`Show more about ${date} date`);
  };

  return (
    <div className={!item.isEmpty ? css.container : css["empty-container"]}>
      <button
        className={concaniteClasses(
          css.ball,
          isToday ? css.today : item.precent === 100 ? css.done : css.notDone
        )}
        onClick={() => showStat(item.date)}
      >
        {item.date}
      </button>
      <span className={css.precentage}>{item.precent}%</span>
    </div>
  );
};

CalendarItem.propTypes = {
  item: PropTypes.object,
};

export default CalendarItem;