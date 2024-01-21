import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";

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
        className={`h-[700px] relative bg-cover bg-center max-sm:h-[500px] w-full`}
      >
        <div
          className={`h-[700px] whitespace-nowrap w-full animate-[scrolls] overflow-hidden max-sm:h-[500px]`}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={`inline-block  bg-cover bg-center box-border h-full max-sm:h-[500px] w-full`}
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>
            ))
          ) : (
            <p>Loading header images...</p>
          )}
        </div>
        <div className="bg-gradient-to-t from-[#ffffffff] to-[#ffffff00] h-[700px] max-sm:h-[500px] absolute top-0 left-0 w-full">
          <div className="absolute flex flex-wrap max-sm:flex-nowrap max-sm:w-full max-sm:whitespace-nowrap max-sm:overflow-auto max-sm:h-72 justify-between items-center top-72 max-sm:top-44 h-[720px] max-sm:mx-0 mx-20 p-3 bg-none">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="w-72 max-sm:w-[50%] max-sm:m-2 max-sm:inline-block h-80 max-sm:h-[250px] p-5 max-sm:p-2 shadow bg-white rounded"
                >
                  <Link to={"/detail?query=" + product.name}>
                    <div className="w-64 h-64 max-sm:h-36 max-sm:w-28 m-0 m-auto">
                      <img
                        title="image"
                        src={product.image}
                        className="w-full h-full"
                        alt={product.name}
                      />
                    </div>
                    <p className="">{product.name}</p>
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
