import Modal from "../Modal/Modal";
import css from "./DeleteWaterModal.module.css";

const DeleteWaterModal = ({ id, isOpen, handleClose }) => {
  return (
    <Modal id={id} isOpen={isOpen} handleClose={handleClose} type="delete">
      <div className={css.deletewatermodal}>
        {/* Your component code here */}
      </div>
    </Modal>
  );
};

export default DeleteWaterModal;
