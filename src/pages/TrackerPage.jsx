import { useState } from "react";
import WaterModal from "../components/WaterModal/WaterModal";

const TrackerPage = () => {
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
      <WaterModal values={modalType}></WaterModal>
      <button
        onClick={() => {
          handleWaterAddOrEditModal("edit");
        }}
      ></button>
      <button
        onClick={() => {
          handleWaterAddOrEditModal("add");
        }}
      ></button>
    </div>
  );
};

export default TrackerPage;
