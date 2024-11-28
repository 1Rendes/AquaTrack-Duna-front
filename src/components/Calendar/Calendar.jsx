import { useEffect, useState } from "react";
import CalendarLine from './CalendarLine/CalendarLine.jsx';
import CalendarPagination from '../CalendarPagination/CalendarPagination.jsx';
import css from './Calendar.module.css';
import Statistics from './Statistics/Statistics.jsx';

const buildData = (year, month) => {
  const newData = {
    days: [],
    year: year || new Date().getFullYear(),
    month: month || new Date().getMonth() + 1,
  };

  // Отримуємо кількість днів у поточному місяці
  const daysInMonth = new Date(newData.year, newData.month, 0).getDate();

  // Додаємо дні до масиву days
  for (let i = 1; i <= daysInMonth; i++) {
    newData.days.push({
      precent: Math.floor(Math.random() * 10) * 10 + 10,
      date: i,
    });
  }

  return newData;
};

const addEmptyDays = (data) => {
  const firstDayDate = new Date(
    data.year,
    data.month - 1,
    data.days[0].date - 1
  );
  const firstDayOfWeek = firstDayDate.getDay();

  const lastDayDate = new Date(
    data.year,
    data.month - 1,
    data.days[data.days.length - 1].date - 1
  );
  const lastDayOfWeek = lastDayDate.getDay();

  const emptyDaysAtStart = [];
  const emptyDaysAtEnd = [];

  // Додавання реальних порожніх днів на початку, але без створення порожніх об'єктів
  if (firstDayOfWeek > 0) {
    emptyDaysAtStart.push(...Array(firstDayOfWeek).fill(null));
  }

  // Додавання реальних порожніх днів в кінці, але без створення порожніх об'єктів
   if (lastDayOfWeek < 6) {
    emptyDaysAtEnd.push(...Array(6 - lastDayOfWeek).fill(null));
  }
   
   for (let i = lastDayOfWeek; i < 7; i++) {
    emptyDaysAtEnd.push({ isEmpty: true });
  } 

  return [...data.days];
};

const splitIntoChunks = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const getLast7Days = (data) => {
  const today = new Date();

  const index = data.days.findIndex(
    (elem) => elem.date - 1 === today.getDate()
  );

  return data.days.slice(index - 7, index);
};

const Calendar = () => {
  const [data, setData] = useState(buildData());
  const [showStatistics, setShowStatistc] = useState(false);
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    const updateChunks = () => {
      if (window.innerWidth > 768) {
        setChunks(splitIntoChunks(addEmptyDays(data), 8));
      } else {
        setChunks(splitIntoChunks(addEmptyDays(data), 7));
      }
    };

    updateChunks();

    window.addEventListener("resize", updateChunks);
    return () => window.removeEventListener("resize", updateChunks);
  }, [data]);

  const changeMonth = ({ next, prev }) => {
    if (next) {
      const newMonth = data.month === 12 ? 1 : data.month + 1;
      const newYear = data.month === 12 ? data.year + 1 : data.year;
      setData(buildData(newYear, newMonth));
    } else if (prev) {
      const newMonth = data.month === 1 ? 12 : data.month - 1;
      const newYear = data.month === 1 ? data.year - 1 : data.year;
      setData(buildData(newYear, newMonth));
    }
  };

  const showStatisticsCallback = () => {
    setShowStatistc(!showStatistics);
  };

  return (
    <div>
      <div className={css["pagination-container"]}>
        <h3 className={css.header}>Month</h3>
        <CalendarPagination
          data={data}
          changeMonth={changeMonth}
          isActiveBtn={!showStatistics}
          showStatistics={showStatisticsCallback}
        />
      </div>
      {showStatistics ? (
        <Statistics data={getLast7Days(data)}></Statistics>
      ) : (
        chunks.length > 0 && (
          <div className={css.container}>
            {chunks
              .filter((chunk) => chunk.length > 0)
              .map((elem, i) => (
                <CalendarLine
                  key={i}
                  items={elem}
                  month={data.month}
                  year={data.year}
                />
              ))}
          </div>
        )
      )}
    </div>
  );
};

export default Calendar;
