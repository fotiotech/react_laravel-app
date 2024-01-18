import React, { FC, useCallback } from "react";

interface AddToCartProps {
  id: string | number;
  Name: string;
  image: string;
}

const cart: { Prodid: string | number; ProdName: string; ProdImage: string }[] =
  [];

const AddToCart: FC<AddToCartProps> = ({ id, Name, image }) => {
  const addToCartHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      cart.push({
        Prodid: id,
        ProdName: Name,
        ProdImage: image,
      });
      localStorage.setItem("cartItem", JSON.stringify(cart));
    },
    [id, Name, image]
  );

  return (
    <div>
      <div>
        <button
          onClick={addToCartHandler}
          type="button"
          title="Add To Cart"
          className="p-1 px-4 rounded-full bg-slate-700 text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
