import React, { useState } from "react";
import FetchData from "../pages/hooks/FetchData";

const HeaderScroll = () => {
  const [Products, setProducts] = useState("");
  const [icon, setIcon] = useState("");

  FetchData("HeaderProduct.json", setProducts);
  FetchData("icon.json", setIcon);

  // function Scroll() {
  //   setTimeout(() => {
  //     const Scroll = document.getElementsByClassName(".Scroll");
  //     window.scrollTo(0, document.Scroll.offsetWidth - 100);
  //   }, 1000);
  // }

  function sliderigth() {
    var slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - 1280;
  }

  function sliderleft() {
    var slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + 1280;
  }

  return (
    <div className="relative w-full h-[700px] left-0 sm:h-[400px] box-border">
      <p className=" absolute  text-6xl ml-40 sm:text-2xl sm:ml-20 sm:mt-20 mt-20 z-10 font-bold">
        Faites vos Achats en un <br />
        Clik sur Dyfk
      </p>
      <div>
        {icon ? (
          <div className=" absolute flex justify-between items-center px-20 z-10 sm:px-2 top-52 sm:top-28 left-0 w-full ">
            <img
              src={icon[4].image}
              onClick={sliderigth}
              className=" w-8 h-8 sm:w-5 cursor-pointer sm:h-5 "
            />
            <img
              src={icon[5].image}
              onClick={sliderleft}
              className=" w-8 h-8 sm:w-5 cursor-pointer sm:h-5"
            />
          </div>
        ) : (
          <p>load</p>
        )}
      </div>
      <div
        id="slider"
        className=" absolute Scroll   whitespace-nowrap overflow-hidden top-0 left-0 z-0  w-full h-full "
      >
        {Products ? (
          Products.map((data) => (
            <div className=" inline-block box-border w-full sm: sm:top-0 h-full ">
              <div className="flex justify-center items-center w-full h-full ">
                <img src={data.image} className="w-auto h-auto" />
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default HeaderScroll;
