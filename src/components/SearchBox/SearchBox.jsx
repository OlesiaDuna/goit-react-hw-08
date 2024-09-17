import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";

const SearchBox = () => {
  const inputID = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.filtercontainer}>
      <label className={css.filterlabel} htmlFor="inputID">
        Find contacts by name or number
      </label>
      <input
        className={css.filterinput}
        type="text"
        value={filter}
        id={inputID}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
