import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import FetchData from "./hooks/FetchData";
import AddToCart from "./carts/AddTocart";
import CheckoutButton from "./carts/CheckoutButton";
import Footer from "./Footer";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const DetailPage: React.FC = () => {
  const location = useLocation();
  const productName = new URLSearchParams(location.search).get("query");
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filterData, setFilterData] = useState<Product | null>(null);

  FetchData("Products.json", setProducts);

  useEffect(() => {
    if (products && productName) {
      const productResult = products.find(
        (data: Product) => data.name.toLowerCase() === productName.toLowerCase()
      );
      setFilterData(productResult || null);
    }
    // return setFilterData(false);
  }, [products, productName]);

  return (
    <>
      <Header />
      <div className=" top-28  relative sm:top-28 w-full bg-[#efefef]">
        <div className="w-full sm:p-1 bg-white px-20 sm:px-0 ">
          {filterData ? (
            <div
              key={filterData?.id}
              className="flex relative p-3  sm:flex-col"
            >
              <div className=" w-[400px] sm:w-full  h-[500px] sm:h-96">
                <div className="w-auto sm:w-full h-full sm:h-[350px] flex justify-center items-center box-border overflow-hidden  sm:m-0">
                  <img
                    title={filterData?.name}
                    src={filterData?.image}
                    className="w-auto h-auto "
                  />
                </div>
              </div>
              <div className="h-full  w-[700px]  sm:mt-5 m-10 sm:m-2 sm:w-full">
                <p className="m-3 sm:m-1 font-semibold font-sans text-2xl pb-5 ">
                  {filterData?.name}
                </p>
                <div className="flex">
                  <div className="py-5 sm:py-2">
                    <CheckoutButton />
                  </div>
                  <div className="py-5 sm:py-2">
                    <AddToCart
                      id={filterData?.id}
                      Name={filterData?.name}
                      image={filterData?.image}
                      // Add other required props like price here
                    />
                  </div>
                </div>
                <div className=" border-t-2 mt-2">
                  <p className="w-[600px] sm:w-full py-5 p-2">
                    {filterData.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="bg-white px-20 sm:px-0 sm:bg-[#efefef] mt-1 w-full">
          <h2 className="text-2xl font-bold">Similar Products</h2>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:flex-col items-center sm:items-stretch">
            {products ? (
              products
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterData?.name.toLowerCase() || "")
                )
                .map((data) => (
                  <Link key={data.id} to={"/detail?query=" + data.name}>
                    <div className="w-52 sm:w-full bg-white h-52 sm:h-48 sm:mb-1 sm:flex  rounded-xl sm:rounded-none p-3 sm:p-1">
                      <div className=" w-44 overflow-hidden box-border sm:w-40 h-48 sm:h-44 rounded">
                        <img
                          title="image"
                          src={data.image}
                          className="w-auto h-auto"
                        />
                      </div>

                      <p className=" h-16 sm:h-12 overflow-ellipsis ">
                        {data.name}
                      </p>
                    </div>
                  </Link>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DetailPage;
