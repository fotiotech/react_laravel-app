import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/products/new`).then((response) => {
        setProducts(response.data);
      });
    } catch {
      (error: any) => {
        console.log(error);
      };
    }
  }, []);

  return (
    <div>
      <Header />
      <div className=" pt-28 flex flex-wrap">
        {products ? (
          products.map((data) => (
            <div className="w-64 h-64 ">
              <img title="image" src={data.Image} className=" w-auto h-auto" />
              <p>{data.ProductName}</p>
            </div>
          ))
        ) : (
          <p>hello</p>
        )}
      </div>
    </div>
  );
};

export default Product;
