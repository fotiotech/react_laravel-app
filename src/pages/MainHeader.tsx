import { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import React from "react";

const MainHeader = () => {
  const [Product, setProduct] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);

  FetchData("HeaderProduct.json", setProduct);

  return (
    <>
      <div>
        <div>
          <header
            className={`h-[700px] max-sm:h-[500px] bg-[url('/boy-long_sleeve.jpg')] bg-cover bg-center w-full`}
          >
            <div className="bg-gradient-to-t from-[#ffffffff] to-[#ffffff00] h-[700px] max-sm:h-[500px]  relative  w-full">
              <div className=" absolute flex flex-wrap max-sm:flex-nowrap max-sm:w-full max-sm:whitespace-nowrap max-sm:overflow-auto max-sm:h-72 justify-between items-center top-72 max-sm:top-44 h-[720px] max-sm:mx-0  mx-20 p-3 bg-none">
                {Product ? (
                  Product.map((product) => (
                    <div
                      key={product.id}
                      className=" w-72 max-sm:w-[50%] max-sm:m-2 max-sm:inline-block  h-80 max-sm:h-[250px] p-5 max-sm:p-2  shadow bg-white rounded"
                    >
                      <Link to={"/detail/" + product.id}>
                        <div className=" w-64 h-64 max-sm:h-36 max-sm:w-28 m-0 m-auto">
                          <img
                            title="image"
                            src={product.image}
                            className=" w-full h-full"
                          />
                        </div>
                        <p className="">{product.name}</p>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>data is Loading...</p>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
