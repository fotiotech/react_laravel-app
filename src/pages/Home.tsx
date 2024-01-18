import MainHeader from "./MainHeader";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import React from "react";

function Home() {
  const [scrollProduct, setScrollProduct] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);
  const [scrollProducts, setScrollProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);
  const [allcategorie, setAllcategorie] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
    },
  ]);

  FetchData("HorizontalScroll.json", setScrollProduct);

  FetchData("HorizontalScroll-2.json", setScrollProducts);

  FetchData("allcategory.json", setAllcategorie);

  return (
    <>
      <Header />
      <MainHeader />
      <main className=" mt-80 max-sm:mt-9 w-full">
        <h2 className="mx-20 max-sm:mx-0  my-5 mt-3 font-bold max-sm:text-2xl text-3xl">
          Best Deals
        </h2>
        <div className=" p-3 h-72 max-sm:h-48 mx-20 max-sm:mx-0  mb-3 whitespace-nowrap overflow-hidden max-sm:overflow-auto bg-[#efefef] ">
          {scrollProduct ? (
            scrollProduct.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 max-sm:h-40 max-sm:w-40 mt-3 max-sm:mt-1 p-4 inline-block mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail?query=" + product.name}>
                  <div className=" w-32 h-40 max-sm:h-28 m-0 m-auto">
                    <img title="image" src={product.image} className=" w-full h-full" />
                  </div>
                  <p className="">{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className=" p-3 h-72 max-sm:h-48 mx-20 max-sm:mx-0  mb-3 whitespace-nowrap overflow-hidden max-sm:overflow-auto bg-[#efefef] ">
          {scrollProducts ? (
            scrollProducts.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 max-sm:h-40 max-sm:w-40 mt-3 max-sm:mt-1 inline-block p-4 mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail?query=" + product.name}>
                  <div className=" w-32 h-40 max-sm:h-28 m-0 m-auto">
                    <img title="image" src={product.image} className=" w-full h-full" />
                  </div>

                  <p className="">{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className="w-full mt-10">
          <h2 className="mx-20 max-sm:mx-0  my-4 font-bold max-sm:text-2xl text-3xl">
            All Category
          </h2>
          <div className=" flex items-center max-sm:w-full gap-3 max-sm:gap-1 flex-wrap p-3 max-sm:p-1 bg-[#efefef] mx-20 max-sm:mx-0">
            {allcategorie ? (
              allcategorie.map((product) => (
                <div
                  key={product.id}
                  className=" w-[257px] max-sm:w-[49%] p-3 rounded-md bg-white"
                >
                  <Link to={"/detail?query=" + product.name}>
                    <div className="m-0 m-auto  h-52 w-48 max-sm:w-36 max-sm:h-40 rounded-md bg-[#efefef]">
                      <img title="image" src={product.image} className="h-full w-full " />
                    </div>
                    <p>{product.name}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
