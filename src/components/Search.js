import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../store/rocketsSlice";

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <section className="searchContainer">
      <input
        type="search"
        className="search"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </section>
  );
}

export default Search;
