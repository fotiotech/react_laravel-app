import React, { useEffect, useState } from "react";

interface Close {
  CloseCartHandler: () => void;
}

type cart = {
  Prodid: string | number;
  ProdName: string;
  ProdImage: string;
};

const Cart: React.FC<Close> = ({ CloseCartHandler }) => {
  const [cart, setCart] = useState<cart[] | unknown>(null);

  useEffect(() => {
    const getCarts = localStorage.getItem("carT");
    const Stringify = JSON.stringify(getCarts);
    setCart(Stringify);
  });

  return (
    <div className="absolute w-96 h-96 top-8 max-sm:top-2 max-sm:right-2 max-sm:w-64 right-20 rounded-3xl bg-slate-400">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => CloseCartHandler}
          className="p-1 bg-slate-600 m-1 rounded-full"
        >
          Close Cart
        </button>

        <p className="p-1 w-20 bg-slate-600 m-1 rounded-full  ">Clear Cart</p>
      </div>

      {/* <div className=" w-full h-72 overflow-auto">
        {carts ? (
          carts.map((item) => (
            <div key={item.Prodid} className="w-full h-20 my-2">
              <div className="flex p-3">
                <div className="w-20 h-20">
                  <img
                    src={item.ProdImage}
                    alt={item.ProdName}
                    className="w-full h-full"
                  />
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
      </div> */}
    </div>
  );
};

export default Cart;
