import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import FetchData from "./hooks/FetchData";
// import { useHistory } from "react-router-dom";

const Header = () => {
  const [icon, setIcon] = useState(null);
  // const [search, setSearch] = useState("");
  // const history = useHistory();

  FetchData("icon.json", setIcon);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   // Redirect to search page with the search query
  //   history.push(`/search?q=${search}`);
  // };

  return (
    <header className="relative">
      {icon ? (
        <div className="flex justify-between w-full bg-none h-[80px] sticky items-center p-3 px-20">
          <h1 className=" font-bold text-3xl">Logo</h1>
          <nav className="border shadow rounded-full">
            <ul className="flex justify-center items-center h-[50px]">
              <li className="px-12 ">
                <Link to="/">Home</Link>
              </li>
              <li className="px-12 border-l">
                <Link to="/product">Products</Link>
              </li>
              <li className="px-12 SearchButton  border-l">
                <Search />
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center p-2">
            <div className="flex justify-center items-center px-2">
              <p className="px-3 font-bold">Login</p>
              <img
                src={icon[0].image}
                alt="profile photo"
                className="w-8 h-8 rounded-full "
              />
            </div>
            <div className="flex justify-center items-center ml-6 w-11 h-11 rounded-full bg-slate-50">
              <img src={icon[6].image} className="w-8 h-8" />
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
      <div className="absolute search invisible w-[800px] h-[300px] top-5  left-72 bg-[#00003a] rounded-lg">
        {/* <form onSubmit={handleSearch} className="flex relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-[600px] h-12 rounded-full block text-white px-4 m-0 m-auto mt-8 bg-[#0000008a]"
          />
          <button className="absolute top-11 right-28  text-white">
            <Search />
          </button>
        </form> */}
      </div>
    </header>
  );
};

export default Header;
