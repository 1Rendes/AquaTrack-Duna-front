const SaveButton = ({ isSubmitting }) => {
  return (
    <button disabled={isSubmitting} type="submit">
      Save
    </button>
  );
};

export default SaveButton;
