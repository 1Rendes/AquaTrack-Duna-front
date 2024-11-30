import { useEffect, useState } from "react";
import WaterMainInfo from "../components/WaterMainInfo/WaterMainInfo";
import { useDispatch } from "react-redux";
import { getDayWater, getMonthWater } from "../redux/water/operations";
import { addMonths, format } from "date-fns";
import WaterDetailedInfo from "../components/WaterDetailedInfo/WaterDetailedInfo";
import Container from "../components/Container/Container";

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
    dispatch(getDayWater(currentDay));
  }, [currentDay, currentMonth, dispatch]);

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
    <Container>
      <WaterMainInfo />
      <WaterDetailedInfo
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        currentMonth={currentMonth}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
    </Container>
  );
};

export default TrackerPage;
