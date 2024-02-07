import { Link } from "react-router-dom";
import { Menu, Search } from "@mui/icons-material";
import { useCallback, useState, useContext } from "react";
import FetchData from "./hooks/FetchData";
import Cart from "./carts/Cart";
import React from "react";
import { CartContext } from "./carts/MyCartContext";

type mycart = {
  Prodid: string | number;
  ProdName: string;
  ProdImage: string;
};

const Header = () => {
  const [icon, setIcon] = useState(null);
  var [showSearchBox, setShowSearchBox] = useState("invisible");
  // var [showSBox, setShowSBox] = useState(true);
  var [inputBox, setInputBox] = useState("");
  var [showCart, setShowCart] = useState("invisible");
  var [products, setProducts] = useState("");
  const { cart } = useContext<mycart | unknown>(CartContext);

  var hideBox = useCallback(() => {
    setShowSearchBox("invisible");
  }, []);

  FetchData("icon.json", setIcon);
  FetchData("Products.json", setProducts);

  return (
    <header className="relative z-20 ">
      <div className="fixed h-[80px] w-full">
        <div>
          {icon ? (
            <div className="flex justify-between w-full bg-sec text-white h-[80px]  top-0 items-center sm:h-[115px] p-3 sm:px-2 md:px-2 px-20">
              <h1 className=" flex items-center sm:absolute sm:top-2">
                <div className="invisible sm:visible sm:pr-2">
                  <Menu />
                </div>
                <Link to={"/"}>
                  <img
                    title="logo"
                    src="/logo.png"
                    className=" w-auto h-auto sm:w-16 "
                  />
                </Link>
              </h1>
              <nav className="border sm:absolute sm:right-1 sm:top-14 sm:w-[97%] sm:mx-1  shadow rounded-full">
                <ul className="flex justify-center items-center h-[50px]">
                  <li className="px-12 sm:px-10">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="px-12 sm:px-10 border-l border-[#333]">
                    <Link to="/product">Products</Link>
                  </li>
                  <li
                    title="Show cart"
                    onClick={() => setShowSearchBox("visible")}
                    className="px-12 sm:px-10  border-l border-[#333]"
                  >
                    <Search />
                  </li>
                </ul>
              </nav>
              <div className="flex justify-center sm:absolute sm:top-0 sm:right-0 items-center p-2">
                <div className="flex justify-center text-pri items-center sm:px-0 px-2">
                  <Link to={"/login"}>
                    <p className="px-3 font-bold">Login</p>
                  </Link>
                  <Link to={"/profile"}>
                    <img
                      src={icon[0].image}
                      alt="profile photo"
                      className="w-8 h-8 sm:mx-1  rounded-full "
                    />
                  </Link>
                </div>
                <div
                  onClick={() => setShowCart("visible")}
                  className="flex relative justify-center items-center ml-6 sm:ml-2 w-11 sm:w-9 h-11 sm:h-9 rounded-full bg-[#efefef]"
                >
                  <img title="image" src={icon[6].image} className="w-8 h-8" />
                  <p>
                    {cart?.length > 0 ? (
                      <p className="rounded-full absolute w-6 h-6 text-center left-0 bottom-0 bg-red-400">
                        {cart.length}
                      </p>
                    ) : (
                      " "
                    )}
                  </p>
                  <div className={`${showCart}`}>
                    <Cart CloseCartHandler={() => setShowCart("invisible")} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>loading...</p>
          )}
          <div className=" flex items-center sm:invisible h-8 w-full bg-[#222]">
            <div className="px-20 sm:px-2 md:px-2 text-white">
              <Menu />
            </div>
            <ul className="flex text-pri  item-center w-[60%]">
              <li className=" hover:border px-5">Products</li>
              <li className=" hover:border px-5">Electronic</li>
              <li className=" hover:border px-5">Customer Services</li>
              <li className=" hover:border px-5"> Deals</li>
              <li className=" hover:border px-5">For Kid's</li>
              <li className=" hover:border px-5">Collection</li>
              <li className=" hover:border px-5">Refrigerator</li>
              <li className=" hover:border px-5">Kitchen</li>
            </ul>
          </div>
        </div>
        <div
          className={`absolute box ${showSearchBox} transition-all ease duration-500 w-full h-[800px] top-0 sm:w-full sm:left-0  left-0  bg-[#000000a2]`}
        >
          <div className="flex flex-col overflow-hidden relative w-[800px] sm:w-full top-4 sm:top-0 rounded-lg m-auto h-[500px] sm:h-full sm:rounded-none bg-pri border">
            <form onSubmit={hideBox}>
              <input
                title="search"
                placeholder="Search..."
                onChange={(e) => setInputBox(e.target.value)}
                className="w-[600px] sm:w-[80%] h-12 rounded-full block  px-4 m-0 m-auto mt-1 sm:mt-2 bg-[#efefef]"
              />
              <Link to={"/search?query=" + inputBox}>
                <button
                  title="submit"
                  className="absolute top-3 sm:top-4 right-28 sm:right-12  "
                >
                  <Search />
                </button>
              </Link>
            </form>
            <div className="mt-10 sm:overflow-y-auto">
              <ul>
                {products ? (
                  products
                    .filter((data) =>
                      data.name
                        .toLowerCase()
                        .includes(inputBox.toLowerCase() || "")
                    )
                    .map((item) => (
                      <Link to={"/search?query=" + item.name}>
                        <li className="py-2 pl-[12%] sm:pl-4 font-semibold hover:bg-[#efefef]">
                          {item.name}
                        </li>
                      </Link>
                    ))
                ) : (
                  <li></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
