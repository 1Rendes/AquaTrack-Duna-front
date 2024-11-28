import { useState } from "react";
import { editWater, deleteWater } from "../../redux/water/operations";
import css from "./WaterItem.module.css";
// import Modal from "../Modal/Modal";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import { useDispatch } from "react-redux";
import icons from "../../img/icons.svg";
import waterGlassDesk1x from "../../img/desk_tab_mage_water-glass-fill_1x.png";
import waterGlassDesk2x from "../../img/desk_tab_mage_water-glass-fill_2x.png";
import waterGlassMob1x from "../../img/mob_mage_water-glass-fill_1x.png";
import waterGlassMob2x from "../../img/mob_mage_water-glass-fill_2x.png";
import waterWebpDesk1x from "../../img/desk_tab_mage_water-glass-fill_1x.webp";
import waterWebpDesk2x from "../../img/desk_tab_mage_water-glass-fill_2x.webp";
import waterWebpMob1x from "../../img/mob_mage_water-glass-fill_1x.webp";
import waterWebpMob2x from "../../img/mob_mage_water-glass-fill_2x.webp";



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
            type="image/jpeg"
            srcSet={`${waterGlassDesk1x} 1x, ${waterGlassDesk2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            type="image/webp"
            srcSet={`${waterWebpDesk1x} 1x, ${waterWebpDesk2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            type="image/jpeg"
            srcSet={`${waterGlassMob1x} 1x, ${waterGlassMob2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            type="image/webp"
            srcSet={`${waterWebpMob1x} 1x, ${waterWebpMob2x} 2x`}
            media="(max-width: 767px)"
          />
          <img
            className={css.img}
            src={waterGlassDesk1x}
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
              <use href={`${icons}#icon-edit-2`}></use>
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
              <use href={`${icons}#icon-trash-04`}></use>
            </svg>
          </button>
        </li>
      </ul>
      {editModalIsOpen && (
        <WaterModal
          handleClose={handleCloseEditModal}
          onEdit={(updatedData) => dispatch(editWater({ id, ...updatedData }))}
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
