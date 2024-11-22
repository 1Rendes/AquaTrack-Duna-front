import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterId = useId();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={css.field}
        id={filterId}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
