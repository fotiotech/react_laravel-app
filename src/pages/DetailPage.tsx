import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import FetchData from "./hooks/FetchData";
import AddToCart from "./Carts/AddToCart";
import CheckoutButton from "./Carts/CheckoutButton";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const DetailPage: React.FC = () => {
  const location = useLocation();
  const productName: any = new URLSearchParams(location.search).get("query");
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filterData, setFilterData] = useState<Product | null>(null);

  FetchData("Products.json", setProducts);

  useEffect(() => {
    if (products && productName) {
      const productResult = products.find(
        (data: Product) => data.name === productName
      );
      setFilterData(productResult || null);
    }
  }, [products, productName]);

  return (
    <div>
      <Header />
      <div className="px-20 max-sm:px-0 w-full bg-slate-100">
        <div className="w-full mb-2 bg-white p-3">
          {filterData ? (
            <div
              key={filterData.id}
              className="flex items-center relative justify-center max-sm:flex-col"
            >
              <div className="w-56 h-64 m-4">
                <img
                  title={filterData.name}
                  src={filterData.image}
                  className="w-full h-full"
                />
              </div>
              <div className="h-full w-[700] max-sm:w-full">
                <p className="m-3 font-semibold text-xl">{filterData.name}</p>
                <div className="flex">
                  <div>
                    <CheckoutButton />
                  </div>
                  <div className=" ">
                    <AddToCart
                      id={filterData.id}
                      Name={filterData.name}
                      image={filterData.image}
                      // Add other required props like price here
                    />
                  </div>
                </div>
                <p className="w-[600px] max-sm:w-full p-2">
                  {filterData.description}
                </p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="bg-white">
          <h2 className="text-2xl font-bold">Similar Products</h2>
          <div className="w-full flex flex-wrap items-center">
            {products ? (
              products
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterData?.name.toLowerCase() || "")
                )
                .map((data) => (
                  <div key={data.id} className="w-52 h-52 rounded-xl p-3">
                    <Link to={"/detail/" + data.name}>
                      <div className="bg-slate-100 w-44 h-48">
                        <img
                          title="image"
                          src={data.image}
                          className="w-full h-full"
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
