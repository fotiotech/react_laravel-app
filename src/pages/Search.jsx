import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
      {/* Add your search results rendering logic here */}
    </div>
  );
};

export default Search;
