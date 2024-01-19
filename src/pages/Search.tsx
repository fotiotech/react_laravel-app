import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FetchData from "./hooks/FetchData";
import { useEffect, useState } from "react";
import AddToCart from "./Carts/AddToCart";
import React from "react";

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
    <div className="">
      <Header />
      <div className="">
        <h2 className="ml-20 max-sm:ml-1">Search Results for: {searchQuery}</h2>
      </div>

      <div className="flex items-center relative px-20 max-sm:px-1 bg-[#fafafa]">
        <div className="w-80 h-[1000px] max-sm:invisible max-sm:absolute max-sm:ml-[-330px] border p-3 bg-white">
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
        <div className=" w-full h-[1000px] overflow-hidden">
          {filteredProducts ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="relative">
                <div className=" absolute left-64 top-48">
                  <AddToCart
                    id={product.id}
                    Name={product.name}
                    image={product.image}
                  />
                </div>
                <Link to={"/detail?query=" + product.name}>
                  <div className="flex bg-white p-5 rounded-lg h-64 max-sm:h-48 m-1 w-full">
                    <div className="h-48 max-sm:h-32 w-44 max-sm:w-28 bg-[#fafafa] ">
                      <img
                        title="image"
                        src={product.image}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p>{product.name}</p>
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
  );
};

export default Search;
