import PropTypes from "prop-types";
import CalendarItem from "../../CalendarItem/CalendarItem.jsx";
import css from "./CalendarLine.module.css";

const isToday = (year, month, date) => {
  const today = new Date();
  const givenDate = new Date(year, month - 1, date);
  return today.toDateString() === givenDate.toDateString();
};

const CalendarLine = ({ items, month, year }) => {
  return (
    <div className={css.line}>
      {" "}
      {items
        .filter((elem) => elem)
        .map((elem, index) => {
          return (
            <CalendarItem
              key={`${elem.date}-${index}`}
              item={elem}
              isToday={isToday(year, month, elem.date)}
            />
          );
        })}{" "}
    </div>
  );
};

CalendarLine.propTypes = {
  items: PropTypes.array,
  month: PropTypes.number,
  year: PropTypes.number,
};

export default CalendarLine;
