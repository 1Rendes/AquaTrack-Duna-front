import { useState } from "react";
import css from "./WaterItem.module.css";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import icons from "../../img/icons.svg";

const WaterItem = ({ item: { _id, time, amount } }) => {
  const [isEditModalOpen, setEditModalIsOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalIsOpen] = useState(false);

  const handleOpenEditModal = () => setEditModalIsOpen(true);
  const handleCloseEditModal = () => setEditModalIsOpen(false);
  const handleOpenDeleteModal = () => setDeleteModalIsOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalIsOpen(false);

  const [hours, minutes, seconds] = time.split("T")[1].split(":");
  const formattedTime = [hours, minutes].join(":");

  const formatWaterAmount =
    amount >= 1000 ? `${(amount / 1000).toFixed(1)} L` : `${amount} mL`;

  return (
    <div className={css.waterItem}>
      <svg width="38" height="38" className={css.glass}>
        <use href={`${icons}#icon-water-glass`}></use>
      </svg>
      <div className={css.waterItemContent}>
        <span className={css.waterAmount}>{formatWaterAmount}</span>
        <span className={css.waterTime}>{formattedTime}</span>
      </div>
      <div className={css.waterItemActions}>
        <button
          className={css.editBtn}
          onClick={handleOpenEditModal}
          aria-label="Edit water card"
        >
          <svg width="14" height="14" className={css.pencil}>
            <use href={`${icons}#icon-edit-2`}></use>
          </svg>
        </button>

        <button
          className={css.deleteBtn}
          onClick={handleOpenDeleteModal}
          aria-label="Delete water card"
        >
          <svg width="14" height="14" className={css.trash}>
            <use href={`${icons}#icon-trash-04`}></use>
          </svg>
        </button>
        {isDeleteModalOpen && (
          <DeleteWaterModal
            id={_id}
            isOpen={isDeleteModalOpen}
            handleClose={handleCloseDeleteModal}
          />
        )}
        {isEditModalOpen && (
          <WaterModal
            modalType="edit"
            id={_id}
            isOpen={isEditModalOpen}
            handleClose={handleCloseEditModal}
          />
        )}
      </div>
    </div>
  );
};

export default WaterItem;
