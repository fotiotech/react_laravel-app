import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import { useEffect, useState } from "react";
import AddTocart from "./Carts/AddTocart";
import React from "react";
import CheckoutButton from "./Carts/CheckoutButton";

const DetailPage = () => {
  const { productid } = useParams();
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);
  const [filterData, setFilterData] = useState([
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
      const ProductResult = products.filter(
        (data: any) => data.id == productid
      );
      setFilterData(ProductResult);
    }
  }, [products, productid]);

  return (
    <div>
      <Header />
      <div className="px-20 max-sm:px-0 w-full  bg-slate-100">
        <div className="  w-full mb-2 bg-white p-3 ">
          {filterData ? (
            filterData.map((product) => (
              <div
                key={product.id}
                className="flex items-center relative justify-center max-sm:flex-col"
              >
                <div className="w-56 h-64 m-4">
                  <img
                    title={product.name}
                    src={product.image}
                    className="w-full h-full"
                  />
                </div>
                <div className="h-full w-[700] max-sm:w-full">
                  <p className="m-3 font-semibold text-xl">{product.name}</p>
                  <div className="flex">
                    <div>
                      <CheckoutButton />
                    </div>
                    <div className=" ">
                      <AddTocart
                        id={product.id}
                        Name={product.name}
                        image={product.image}
                        price={product.price}
                      />
                    </div>
                  </div>
                  <p className=" w-[600px] max-sm:w-full p-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="bg-white">
          <h2 className="text-2xl font-bold">Similar Products</h2>
          <div className="w-full flex flex-wrap items-center">
            {filterData ? (
              products
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterData[0].name.toLowerCase())
                )
                .map((data) => (
                  <div key={data.id} className=" w-52 h-52 rounded-xl p-3">
                    <Link to={"/detail/" + data.id}>
                      <div className=" bg-slate-100 w-44 h-48">
                        <img
                          title="image"
                          src={data.image}
                          className=" w-full h-full"
                        />
                      </div>
                      <p>{data.name}</p>
                    </Link>
                  </div>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
