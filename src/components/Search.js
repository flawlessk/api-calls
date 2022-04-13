import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actionTypes';

const Search = () => {
  const searchQuery = useSelector((state) => state.ProductsReducer.search);
  const dispatch = useDispatch();

  const changeSearch = (e) => {
    dispatch(searchAction(e.target.value));
  };

  return (
    <div style={{position: "relative"}}>
      <input
        type="text"
        id="search"
        placeholder="search..."
        value={searchQuery}
        onChange={changeSearch}
      />
      <button style={{position: "absolute", left: 120}}>
        <img style={{width: 10}} src="/assets/search.jpg" alt="search" />
      </button>
    </div>
  );
};

export default Search;