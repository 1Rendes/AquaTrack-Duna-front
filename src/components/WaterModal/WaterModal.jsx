import Modal from "../Modal/Modal.jsx";
import WaterForm from "../WaterForm/WaterForm.jsx";
import css from "./WaterModal.module.css";

const WaterModal = ({ modalType, id, isOpen, handleClose }) => {
  //id опціонально (тільки для edit)
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} modalType="water">
            <>
        {modalType === "add" && (
          <>
             <div className={css.waterModalContainer}>
              <h2 className={css.waterModalTitle}> Add water</h2>
              <h3 className={css.waterModalSubtitle}>Choose a value</h3>
              </div>
         
            <WaterForm type="add" handleClose={handleClose} />
          </>
        )}

        {modalType === "edit" && (
          <>
            <div className={css.waterModalContainer}>
              <h2 className={css.waterModalTitle}> Edit the entered amount of water</h2>
              <h3 className={css.waterModalSubtitle}>Correct entered data: </h3>
            </div>
            <WaterForm type="edit" id={id} handleClose={handleClose} />
          </>
        )}
        </>
       
    </Modal>
  );
};

export default WaterModal;
