import React, { createContext } from "react";

interface IUserContext {
  username: string;
}

export const userContext = createContext<IUserContext | null>(null);

const UserStore = ({ children }: { children: React.ReactNode }) => {
  const user: IUserContext = {
    username: "",
  };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserStore;
