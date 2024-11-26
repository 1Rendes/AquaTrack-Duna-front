import { useState } from "react";
import css from "./WaterItem.module.css";
import Modal from "../Modal/Modal";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";

const WaterItem = ({ water, time, id }) => {
  const [editModalIsOpen, setEditIsOpen] = useState(false);
  const [delModalIsOpen, setDelIsOpen] = useState(false);

  const handleEditClick = () => setEditIsOpen(true);
  const handleDelClick = () => setDelIsOpen(true);
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
          <button className={css.btn} type="button" onClick={handleEditClick}>
            <svg className={css.icon}>
              <use href="../../img/icons.svg#icon-edit-2"></use>
            </svg>
          </button>
        </li>
        <li className={css.btnlistItem}>
          <button className={css.btn} type="button" onClick={handleDelClick}>
            <svg className={css.icon} height="14">
              <use href="../../img/icons.svg#icon-drop-down"></use>
            </svg>
          </button>
        </li>
      </ul>
      {editModalIsOpen && (
        <Modal>
          <WaterModal handleClose={handleCloseEditModal} id={id} />
        </Modal>
      )}
      {delModalIsOpen && (
        <Modal>
          <DeleteWaterModal handleClose={handleCloseDelModal} id={id} />
        </Modal>
      )}
    </div>
  );
};

export default WaterItem;
