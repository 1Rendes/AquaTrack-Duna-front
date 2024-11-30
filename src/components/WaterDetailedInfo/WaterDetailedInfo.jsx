import UserPanel from "../UserPanel/UserPanel";
import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";

import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = ({
  currentDay,
  setCurrentDay,
  currentMonth,
  handleNextMonth,
  handlePreviousMonth,
}) => {
  return (
    <div className={css.waterdetailedinfo}>
      <UserPanel />
      <DailyInfo currentDay={currentDay} />
      <MonthInfo
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        currentMonth={currentMonth}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
    </div>
  );
};

export default WaterDetailedInfo;
