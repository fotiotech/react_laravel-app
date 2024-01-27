import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import HeaderScroll from "../components/HeaderScroll";

const MainHeader = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);

  FetchData("HeaderProduct.json", setProducts);

  return (
    <div>
      <header
        className={`h-[700px] relative bg-cover bg-center top-28 sm:h-[400px] md:h-[500px] w-full`}
      >
        <HeaderScroll />
        <div className="bg-gradient-to-t from-[#ffffffff] to-[#ffffff00] h-[700px] sm:h-[400px] absolute top-0 left-0 w-full">
          <div className="absolute flex flex-wrap sm:flex-nowrap sm:w-full w-full sm:whitespace-nowrap md:whitespace-nowrap sm:overflow-auto md:overflow-auto sm:h-56 justify-between items-center top-64 sm:top-52 md:top-44 h-[720px] sm:mx-0 sm:px-2 px-20 md:mx-2 p-3  bg-none">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="w-72 sm:w-52 md:w-80 sm:m-2 md:m-3 sm:inline-block md:inline-block h-80 sm:h-52 p-5 sm:p-2 shadow bg-white rounded"
                >
                  <Link to={"/detail?query=" + product.name}>
                    <div className="w-64 h-[240px] overflow-hidden flex justify-center items-center sm:h-40 sm:w-40 m-0 m-auto">
                      <img
                        title="image"
                        src={product.image}
                        className="w-auto h-auto"
                        alt={product.name}
                      />
                    </div>
                    <p className=" ">{product.name}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading product details...</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
