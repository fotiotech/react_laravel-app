import React, { FC, ReactNode, useCallback, useEffect } from "react";
import { createContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
}

type CreateContext = {
  cart: {
    Prodid: number;
    ProdName: string;
    ProdImage: string;
  }[];
  setCart: () => void;
};

export const CartContext = createContext<CreateContext | unknown>(null);

export const CartConTextProvider: FC<ContextProps> = ({ children }) => {
  const [cart, setCart] = useState<CreateContext | unknown>(null);
  console.log(cart);
  useEffect(() => {
    var getCarts = localStorage.getItem("mycart");
    var stringifyitem = JSON.stringify(getCarts);
    var parseitem = JSON.parse(stringifyitem);
    setCart(parseitem);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
