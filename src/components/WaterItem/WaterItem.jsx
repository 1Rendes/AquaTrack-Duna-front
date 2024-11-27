import { useState } from "react";
import { editWater, deleteWater } from "../../redux/water/operations";
import css from "./WaterItem.module.css";
// import Modal from "../Modal/Modal";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import { useDispatch } from "react-redux";

const WaterItem = ({ water, time, id }) => {
  const dispatch = useDispatch();

  const [editModalIsOpen, setEditIsOpen] = useState(false);
  const [delModalIsOpen, setDelIsOpen] = useState(false);

  const handleOpenEditModal = () => setEditIsOpen(true);
  const handleOpenDelModal = () => setDelIsOpen(true);
  const handleCloseEditModal = () => setEditIsOpen(false);
  const handleCloseDelModal = () => setDelIsOpen(false);

  return (
    <div className={css.wateritem}>
      <div>
        <picture>
          <source
            srcSet="/img/desk_tab_mage_water-glass-fill_1x.png 1x, /img/desk_tab_mage_water-glass-fill_2x.png 2x"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/img/mob_mage_water-glass-fill_1x.png 1x, /img/mob_mage_water-glass-fill_2x.png 2x"
            media="(max-width: 767px)"
          />
          <img
            className={css.img}
            src="/img/desk_tab_mage_water-glass-fill_1x.png"
            alt="A glass of water"
          />
        </picture>
      </div>
      <ul className={css.infoList}>
        <li className={css.waterVolume}>{water || "No data"}</li>
        <li className={css.infoListTime}>{time || "No time provided"}</li>
      </ul>
      <ul className={css.btnList}>
        <li className={css.btnlistItem}>
          <button
            className={css.btn}
            type="button"
            onClick={handleOpenEditModal}
          >
            <svg className={css.icon}>
              <use href="../../img/icons.svg#icon-edit-2"></use>
            </svg>
          </button>
        </li>
        <li className={css.btnlistItem}>
          <button
            className={css.btn}
            type="button"
            onClick={handleOpenDelModal}
          >
            <svg className={css.icon} height="14">
              <use href="../../img/icons.svg#icon-drop-down"></use>
            </svg>
          </button>
        </li>
      </ul>
      {editModalIsOpen && (
          <WaterModal
            handleClose={handleCloseEditModal}
            onEdit={(updatedData) =>
              dispatch(editWater({ id, ...updatedData }))
            }
          />
      )}
      {delModalIsOpen && (
          <DeleteWaterModal
            handleClose={handleCloseDelModal}
            onDelete={() => dispatch(deleteWater(id))}
          />
      )}
    </div>
  );
};

export default WaterItem;
