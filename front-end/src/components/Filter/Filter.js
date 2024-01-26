import {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
  resetFilters,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFiler = useSelector(selectFavoriteFilter);
  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value));
  };
  const handleAuthorFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value));
  };
  const handleFavoriteFilterChange = () => {
    dispatch(setFavoriteFilter());
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={favoriteFiler}
              onChange={handleFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
export default Filter;
