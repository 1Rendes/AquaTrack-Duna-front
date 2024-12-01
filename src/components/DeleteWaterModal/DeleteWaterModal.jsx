
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import css from './DeleteWaterModal.module.css';
import { deleteWater } from '../../redux/water/operations';
import CancelButton from '../CancelButton/CancelButton';

const DeleteWaterModal = ({ isOpen, handleClose, id }) => {
  const dispatch = useDispatch();
  const handleClickConfirmationBtn = () => {
    dispatch(deleteWater(id)).unwrap().then(handleClose);
  }
  const handleClickRejectBtn = handleClose;
  
  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
       modalType="delete"
    >
       <div className={css.deleteModal}>
      <h2 className={css.titleOfModal}>Delete entry</h2>
     
      <p className={css.description}>Are you sure you want to delete the entry?</p>
      <div className={css.btnsBox}>
        <button
          className={css.logOutBtn}
          type="button"
          onClick={handleClickConfirmationBtn}
        >
          Delete
        </button>
        <CancelButton handleFunc={handleClickRejectBtn} />
        </div>
        </div>
    </Modal>
  );
};

export default DeleteWaterModal;
        


