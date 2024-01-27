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
      price: "",
      fewCaract: "",
      priceOff: "",
      devise: "",
    },
  ]);

  FetchData("HorizontalScroll.json", setScrollProduct);

  FetchData("HorizontalScroll-2.json", setScrollProducts);

  FetchData("allcategory.json", setAllcategorie);

  // function Collect() {
  //   for (var i = 0; i < product.name.length; i++) {
  //     <div>
  //       <p className=" text-red-500">i[1]</p>

  //       <p className=" text-red-500">i[3]</p>

  //       <p className=" text-red-500">i[4]</p>

  //       <p className=" text-red-500">i[6]</p>
  //     </div>;
  //   }
  // }

  return (
    <>
      <Header />
      <MainHeader />
      <main className=" mt-[430px] sm:mt-44 w-full box-border">
        <h2 className="mx-20 md:mx-2 sm:mx-1  my-5 mt-3 font-bold sm:font-semibold sm:text-xl text-3xl">
          Best Deals
        </h2>
        <div className=" p-3 h-72 sm:h-48 mx-20 md:mx-2 sm:mx-0  mb-3 whitespace-nowrap overflow-hidden sm:overflow-auto bg-[#efefef] ">
          {scrollProduct ? (
            scrollProduct.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 sm:h-40 sm:w-40 mt-3 sm:mt-1 p-4 inline-block mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail?query=" + product.name}>
                  <div className=" w-48 h-48 overflow-hidden flex justify-center items-center sm:w-28 sm:h-28 m-0 m-auto">
                    <img
                      title="image"
                      src={product.image}
                      className=" w-auto h-auto m-auto"
                    />
                  </div>

                  <p className=" text-fif">{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className=" p-3 h-72 sm:h-48 mx-20 lg:mx-2 sm:mx-0  mb-3 whitespace-nowrap overflow-hidden sm:overflow-auto bg-[#efefef] ">
          {scrollProducts ? (
            scrollProducts.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 sm:h-40 sm:w-40 mt-3 sm:mt-1 inline-block p-4 mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail?query=" + product.name}>
                  <div className=" w-48 h-48 sm:w-28 flex justify-center items-center overflow-hidden sm:h-28 m-0 m-auto">
                    <img
                      title="image"
                      src={product.image}
                      className=" w-auto h-auto m-auto"
                    />
                  </div>

                  <div className="text-fif">{product.name}</div>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className="w-full mt-10">
          <h2 className=" sm:mx-1 my-4 mx-20 sm:my-2 sm:font-semibold sm:text-xl font-bold text-3xl">
            All Category
          </h2>
          <div className=" flex items-center gap-3 sm:gap-1 flex-wrap p-3 sm:p-1 bg-[#efefef] mx-20 sm:mx-0">
            {allcategorie ? (
              allcategorie.map((product) => (
                <div
                  key={product.id}
                  className=" w-[257px] sm:w-[49%] p-3 rounded-md sm:rounded-sm bg-white"
                >
                  <Link to={"/detail?query=" + product.name}>
                    <div className="m-0 m-auto  h-52 w-48 sm:w-36 sm:h-40 overflow-hidden flex justify-center items-center rounded-md sm:rounded-sm ">
                      <img
                        title="image"
                        src={product.image}
                        className="h-auto w-auto "
                      />
                    </div>
                    <p className=" h-12 sm:h-12 text-base  sm:text-sm sm:my-1 w-full overflow-hidden  ">
                      {product.name} {product.fewCaract}
                    </p>
                    <div>
                      <div>
                        <span className=" text-sm pr-1">{product.devise}</span>
                        <span className=" font-bold pr-2">{product.price}</span>
                        <span className=" text-sm pr-1">{product.devise}</span>
                        <span className=" text-sm line-through ">
                          {product.priceOff}
                        </span>
                      </div>
                    </div>
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
