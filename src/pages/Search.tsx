import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FetchData from "./hooks/FetchData";
import { useEffect, useState } from "react";
import AddToCart from "./carts/AddTocart";

const Search = () => {
  const location = useLocation();
  var searchQuery: any = new URLSearchParams(location.search).get("query");
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);

  FetchData("Products.json", setProducts);

  useEffect(() => {
    if (products) {
      const ProductResult = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log(ProductResult)
      setFilteredProducts(ProductResult);
    }
  }, [products, searchQuery]);

  // console.log(filteredProducts);

  return (
    <>
      <Header />
      <div className="relative top-32 sm:top-[150px]">
        <div className="">
          <h2 className="ml-20  sm:ml-1">Search Results for: {searchQuery}</h2>
        </div>

        <div className="flex items-center  relative px-20 sm:px-1 bg-[#fafafa]">
          <div className="w-80 h-[1000px] sm:invisible sm:absolute sm:ml-[-330px] border p-3 bg-white">
            <div>
              <h3>Departement :</h3>
              <ul className=" ml-8">
                <li>Electronic</li>
                <li>Books</li>
                <li>Shopping</li>
                <li>Construction</li>
                <li>Founiture</li>
              </ul>
            </div>
            <div>
              <h3>Category :</h3>
              <ul className=" ml-8">
                <li>Laptop</li>
                <li>Tablette</li>
                <li>Smartphone</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className=" w-full overflow-hidden bg-[#efefef]">
            {filteredProducts ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div className=" absolute left-64 sm:top-36 sm:left-44 top-48">
                    <AddToCart
                      id={product.id}
                      Name={product.name}
                      image={product.image}
                    />
                  </div>
                  <Link to={"/detail?query=" + product.name}>
                    <div className="flex bg-white p-5 rounded-lg h-64 sm:h-48 m-1 sm:mx-0 w-full">
                      <div className="h-48 sm:h-32 w-44 sm:w-32 overflow-hidden flex justify-center items-center ">
                        <img
                          title="image"
                          src={product.image}
                          className="w-auto h-auto"
                        />
                      </div>
                      <div>
                        <p className=" overflow-ellipsis ml-2 text-xl sm:text-lg font-medium ">
                          {product.name + product.fewCaract}
                        </p>
                        <div className="ml-2 py-1">
                          <div>
                            <span className=" text-sm pr-1">
                              {product.devise}
                            </span>
                            <span className=" font-bold pr-2">
                              {product.price}
                            </span>
                            <span className=" text-sm pr-1">
                              {product.devise}
                            </span>
                            <span className=" text-sm line-through ">
                              {product.priceOff}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
