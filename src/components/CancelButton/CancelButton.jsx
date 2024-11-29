import css from './CancelButton.module.css'
const CancelButton = ({ handleFunc }) => {
  return (
    <>
      <button
        className={css.cancelBtn}
        type="button"
        onClick={() => {
          handleFunc();
        }}
      >
        Cancel
      </button>
    </>
  );
};

export default CancelButton;
