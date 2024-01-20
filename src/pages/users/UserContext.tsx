import React, { FC, ReactNode } from "react";
import { createContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
}

type CreateContext = {
  user: {
    name: string;
    email: string;
    password: string;
  };
  setUser: () => void
};

export const UserContext = createContext<CreateContext | unknown>(null);

export const UserContextProvider: FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<CreateContext | unknown>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
