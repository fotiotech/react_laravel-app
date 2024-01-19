import React from "react";

const Products = () => {
  return (
    <div className="p-5">
      <div className="border-b-2">
        <h2 className=" text-2xl font-bold">Products</h2>
        <ul className="flex mt-5 ">
          <li className="p-5">Overview</li>
          <li className="p-5">Products</li>
          <li className="p-5">Totals Sells</li>
          <li className="p-5">Purchases</li>
        </ul>
      </div>

      <div >
        <div className=" w-full h-[450px] overflow-auto scrollbar scrollbar-thin scrollbar-track-red-500">
          <form>
            <label>
              <p>Category :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Department :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Name of Product :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
            <label>
              <p>Product Image :</p>
              <input title="name of product" type="text" className="border"/>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
