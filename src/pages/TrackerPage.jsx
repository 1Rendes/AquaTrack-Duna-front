import { useState } from "react";
import WaterModal from "../components/WaterModal/WaterModal";
import WaterMainInfo from "../components/WaterMainInfo/WaterMainInfo";
import UserBar from "../components/UserBar/UserBar";

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
      <UserBar></UserBar>
      <WaterMainInfo onClick={handleWaterAddOrEditModal} />
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
