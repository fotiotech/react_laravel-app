import React, { FC, ReactNode } from "react";
import { createContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
}

type CreateContext = {
  cart: {
    Prodid: number;
    ProdName: string;
    ProdImage: string;
  };
  setCart: () => void;
};

export const CartContext = createContext<CreateContext[] | unknown>(null);

const CartConText: FC<ContextProps> = ({ children }) => {
  const [cart, setCart] = useState<CreateContext | unknown>(null);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartConText;
