import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productName, setProductName] = useState("");
  const [caracteristique, setCaracteristique] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [price, setPrice] = useState("");
  const [priceOff, setPriceOff] = useState("");
  const [devise, setDevise] = useState("");

  async function HandleData(ev) {
    ev.preventDefault();
    if (
      productName === "" ||
      caracteristique === "" ||
      product_description === "" ||
      image === "" ||
      price === "" ||
      priceOff === "" ||
      devise === ""
    ) {
      alert("fill out all required cases");
    }

    try {
      await axios.post("http://localhost:3000/products/new", {
        productName,
        caracteristique,
        product_description,
        video,
        price,
        priceOff,
        devise,
      });
      alert("Registration successful.");
    } catch (error) {
      console.log(error);
    }
  }

  function upload(e) {
    setImage(e.target.files);
    setVideo(e.target.files);
  }

  async function uploadhandler() {
    const data = new FormData();
    data.append("image", image);

    try {
      await axios.post("http://localhost:3000/products/new", data, {
        headers: { "Content-type": "multipart/form-data" },
      });
      alert("Registration successful.");
    } catch (error) {
      console.log(error);
    }
  }

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

      <div>
        <div className=" w-full h-[450px] overflow-auto scrollbar scrollbar-thin scrollbar-track-red-500">
          <form onSubmit={HandleData}>
            <label>
              <p>Product Name :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p>Caracteristique :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setCaracteristique(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p>Price :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p>Price Off :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setPriceOff(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p>Devise :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setDevise(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p>Product Description :</p>
              <input
                title="name of product"
                type="text"
                onChange={(e) => setProduct_description(e.target.value)}
                className="border"
              />
            </label>
            <label>
              <p> Image :</p>
              <input
                title="name of product"
                type="file"
                multiple
                accept=".png, .jpg, .jpeg"
                onChange={uploadhandler}
                className="border"
              />
            </label>
            <label>
              <p> Video :</p>
              <input
                title="name of product"
                type="file"
                multiple
                onChange={uploadhandler}
                className="border"
              />
            </label>
            <button type="submit" onClick={upload}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
