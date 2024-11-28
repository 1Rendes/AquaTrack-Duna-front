import { useEffect, useState } from "react";
import WaterModal from "../components/WaterModal/WaterModal";
import WaterMainInfo from "../components/WaterMainInfo/WaterMainInfo";
import UserBar from "../components/UserBar/UserBar";
import { useDispatch } from "react-redux";
import { getDayWater, getMonthWater } from "../redux/water/operations";
import { addMonths, format } from "date-fns";

const TrackerPage = () => {
  const dispatch = useDispatch();

  const [currentDay, setCurrentDay] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [currentMonth, setCurrentMonth] = useState(() => {
    const currentDate = new Date();

    const month = String(currentDate.getMonth() + 1).padStart(2, "0");

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
    setCurrentMonth(format(newDate, "yyyy-MM"));
  };

  const handlePreviousMonth = (currentMonth) => {
    //Формат у місяця в currentMonth YYYY-MM
    const [year, month] = currentMonth.split("-").map(Number);
    const date = new Date(year, month - 1, 1);
    const newDate = addMonths(date, -1);
    setCurrentMonth(format(newDate, "yyyy-MM"));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const handleWaterAddOrEditModal = (modalType) => {
    setModalType(modalType);
    setIsModalOpen(true);
  };
  const handleClosingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <UserBar />
      <WaterMainInfo
        onClick={() => {
          handleWaterAddOrEditModal("add");
        }}
      />
      {isModalOpen && (
        <WaterModal values={modalType} onClose={handleClosingModal} />
      )}
      {/* <button
        onClick={() => {
          handleWaterAddOrEditModal("edit");
        }}
      ></button>
      <button
        onClick={() => {
          handleWaterAddOrEditModal("add");
        }}
      ></button> */}
    </div>
  );
};

export default TrackerPage;
