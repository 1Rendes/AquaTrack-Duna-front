import { useEffect, useState } from "react";
import WaterModal from "../components/WaterModal/WaterModal";
import WaterMainInfo from "../components/WaterMainInfo/WaterMainInfo";
import UserBar from "../components/UserBar/UserBar";
import { useDispatch } from "react-redux";
import { getDayWater, getMonthWater } from "../redux/water/operations";
import { addMonths, format } from "date-fns";
import WaterDetailedInfo from "../components/WaterDetailedInfo/WaterDetailedInfo";

const TrackerPage = () => {
  const dispatch = useDispatch();

  const [currentDay, setCurrentDay] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [currentMonth, setCurrentMonth] = useState(() => {
    const currentDate = new Date().toISOString().split("T")[0].split("-");
    const month = currentDate[0] + "-" + currentDate[1];

    return month;
  });

  useEffect(() => {
    dispatch(getMonthWater(currentMonth));
  }, [currentMonth, dispatch]);

  useEffect(() => {
    dispatch(getDayWater(currentDay));
  }, [currentDay, dispatch]);

  const handleNextMonth = (currentMonth) => {
    //Формат у місяця в currentMonth YYYY-MM
    const [year, month] = currentMonth.split("-").map(Number);
    const date = new Date(year, month - 1, 1);
    const newDate = addMonths(date, 1);
    console.log(format(newDate, "yyyy-MM"));

    setCurrentMonth(format(newDate, "yyyy-MM"));
  };
  const handlePreviousMonth = (currentMonth) => {
    //Формат у місяця в currentMonth YYYY-MM
    const [year, month] = currentMonth.split("-").map(Number);
    const date = new Date(year, month - 1, 1);
    const newDate = addMonths(date, -1);
    console.log(format(newDate, "yyyy-MM"));
    setCurrentMonth(format(newDate, "yyyy-MM"));
  };

  return (
    <div>
      <WaterDetailedInfo />
      <WaterMainInfo />
    </div>
  );
};

export default TrackerPage;
