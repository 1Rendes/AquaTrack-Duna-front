import Modal from "../Modal/Modal.jsx";
import WaterForm from "../WaterForm/WaterForm.jsx";
import css from "./WaterModal.module.css";

const WaterModal = ({ modalType, id, isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} modalType="water">
      <>
        {modalType === "add" && (
          <>
            <div className={css.waterModal}>
              <h2> Add water</h2>
              <h3>Choose a value</h3>
            </div>
            <WaterForm type="add" />
          </>
        )}

        {modalType === "edit" && (
          <>
            <div>
              <h2> Edit the entered amount of water</h2>
              <h3>Correct entered data: </h3>
            </div>
            <WaterForm type="edit" id={id} handleClose={handleClose} />
          </>
        )}
      </>
    </Modal>
  );
};

export default WaterModal;
