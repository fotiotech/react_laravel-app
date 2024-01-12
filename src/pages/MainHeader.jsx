import { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";

const MainHeader = () => {
  const [Product, setProduct] = useState(null);

  FetchData("HeaderProduct.json", setProduct);

  return (
    <>
      <div>
        <div>
          <header
            className={`h-[700px] bg-[url('/boy-long_sleeve.jpg')] bg-cover bg-center w-full`}
          >
            <div className="bg-gradient-to-t from-[#ffffffff] to-[#ffffff00] h-[700px] relative  w-full">
              <div className=" absolute flex flex-wrap  justify-between items-center top-72 h-[720px] mx-20 p-3 bg-none">
                {Product ? (
                  Product.map((product) => (
                    <div
                      key={product.id}
                      className=" w-72 h-80 p-5 shadow bg-white rounded"
                    >
                      <Link to={"/detail/" + product.id}>
                        <img
                          src={product.image}
                          className=" w-64 h-64 m-0 m-auto"
                        />
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
