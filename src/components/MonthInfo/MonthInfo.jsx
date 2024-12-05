import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import css from "./MonthInfo.module.css";
import WaterConsumChart from "../WaterConsumChart/WaterConsumChart";

const MonthInfo = ({
  currentDay,
  setCurrentDay,
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
}) => {
  const [isGraphicOpen, setIsGraphicOpen] = useState(false);
  const handleOpenGraphic = () => setIsGraphicOpen((prev) => !prev);
  return (
    <div className={css.monthinfo}>
      <CalendarPagination
        handleOpenGraphic={handleOpenGraphic}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
        currentMonth={currentMonth}
      ></CalendarPagination>
      {isGraphicOpen ? (
        <WaterConsumChart currentMonth={currentMonth} />
      ) : (
        <Calendar
          choosenDay={currentDay}
          setCurrentDay={setCurrentDay}
        ></Calendar>
      )}
    </div>
  );
};

export default MonthInfo;
