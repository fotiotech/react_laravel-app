import React, { FC, useCallback, useContext, useEffect } from "react";
// import CartContext from "./MyCartContext";

type AddToCartProps = {
  id: string | number;
  Name: string;
  image: string;
};

type mycartCoid = {
  setCart: () => void;
};

var cart: { Prodid: string | number; ProdName: string; ProdImage: string }[] =
  [];

const AddToCart: FC<AddToCartProps> = ({ id, Name, image }) => {
  // const { setCart } = useContext<mycartCoid | unknown>(CartContext);
  function addToCartHandler() {
    cart.push({
      Prodid: id,
      ProdName: Name,
      ProdImage: image,
    });
    localStorage.setItem("mycart", JSON.stringify(cart));
  }

  return (
    <div>
      <div>
        <button
          onClick={addToCartHandler}
          type="button"
          title="Add To Cart"
          className="p-1 px-4 rounded-full bg-[#00000f] text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
