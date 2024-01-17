import React, { useCallback, useEffect, useState } from "react";

interface CartItem {
  id: string | number;
  image: string;
  Name: string;
  price: string;
}

interface Close {
  CloseCartHandler: () => void;
}

const Cart: React.FC<Close> = ({ CloseCartHandler }) => {
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItem");

    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="">
      <div className="absolute w-96 h-96 top-8 right-20 rounded-3xl bg-slate-400">
        <button
          type="button"
          onClick={() => CloseCartHandler}
          className="p-3 bg-slate-600 m-3 rounded-full"
        >
          Close Cart
        </button>

        <p
          onClick={() => setCartItems(null)}
          className="p-3 bg-slate-600 m-3 rounded-full"
        >
          Clear Cart
        </p>
        {cartItems ? (
          cartItems.map((item: CartItem) => (
            <div key={item.id}>
              <div className="flex p-3">
                <div className="w-24 h-24">
                  <img src={item.image} alt={item.Name} />
                </div>
                <div>
                  <p>{item.Name}</p>
                  <p>{item.price}</p>
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
