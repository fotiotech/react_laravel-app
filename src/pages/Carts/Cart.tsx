import React, { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartConText";

interface Close {
  CloseCartHandler: () => void;
}

const Cart: React.FC<Close> = ({ CloseCartHandler }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="absolute w-96 h-96 top-8 right-20 rounded-3xl bg-slate-400">
      <div className="flex justify-en@d">
        <button
        type="button"
        onClick={() => CloseCartHandler}
        className="p-1 bg-slate-600 m-1 rounded-full"
      >
        Close Cart
      </button>

      <p className="p-1 w-20 bg-slate-600 m-1 rounded-full  ">
        Clear Cart
      </p>
      </div>
      
      <div className=" w-full h-72 overflow-auto">
        {cart ? (
          cart.map((item) => (
            <div key={item.Prodid} className="w-full h-20 my-2">
              <div className="flex p-3">
                <div className="w-20 h-20">
                  <img src={item.ProdImage} alt={item.ProdName} className="w-full h-full"/>
                </div>
                <div>
                  <p>{item.ProdName}</p>
                </div>
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

export default Cart;
