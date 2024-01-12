import MainHeader from "./MainHeader";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";

function Home() {
  const [scrollProduct, setScrollProduct] = useState(null);
  const [scrollProducts, setScrollProducts] = useState(null);
  const [allcategorie, setAllcategorie] = useState(null);

  FetchData("HorizontalScroll.json", setScrollProduct);

  FetchData("HorizontalScroll-2.json", setScrollProducts);

  FetchData("allcategory.json", setAllcategorie);

  return (
    <>
      <Header />
      <MainHeader />
      <main className=" mt-80 w-full">
        <h2 className="mx-20 my-5 mt-3 font-bold text-3xl">Best Deals</h2>
        <div className=" p-3 h-72 mx-20 mb-3 whitespace-nowrap overflow-hidden bg-[#9a9a9a] ">
          {scrollProduct ? (
            scrollProduct.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 mt-3 p-4 inline-block mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail/" + product.id}>
                  <img
                    src={product.image}
                    className=" w-32 h-40 m-0 m-auto mt-4"
                  />
                  <p className="">{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className=" p-3 h-72 mx-20 mb-3 whitespace-nowrap overflow-hidden bg-[#9a9a9a] ">
          {scrollProducts ? (
            scrollProducts.map((product) => (
              <div
                key={product.id}
                className=" w-60 h-60 mt-3 inline-block p-4 mx-[14px] bg-white rounded-3xl"
              >
                <Link to={"/detail/" + product.id}>
                  <img
                    src={product.image}
                    className=" w-32 h-40 m-0 m-auto mt-4"
                  />
                  <p className="">{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>data is Loading...</p>
          )}
        </div>
        <div className="w-full mt-10">
          <h2 className="mx-20 my-4 font-bold text-3xl">All Category</h2>
          <div className="flex justify-between items-center gap-2 flex-wrap p-3 bg-[#afafaf] mx-20">
            {allcategorie ? (
              allcategorie.map((product) => (
                <div
                  key={product.id}
                  className="w-64 h-80 p-3 rounded-md bg-white"
                >
                  <Link to={"/detail/" + product.id}>
                    <img src={product.image} className="m-0 m-auto h-52 " />
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
