import React, { FC, ReactNode } from "react";
import { createContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
  setUser: any,
}

interface CreateContext {};

export const UserContext = createContext<CreateContext | any>({});

export const UserContextProvider: FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<CreateContext | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
