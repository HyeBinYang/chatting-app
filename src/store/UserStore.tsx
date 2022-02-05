import React, { createContext, useState } from "react";

interface UserContextProps {
  uid: string;
  name: string;
  setUid: (uid: string) => void;
  setName: (name: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  uid: "",
  name: "",
  setUid: () => {},
  setName: () => {},
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const setUid = (uid: string) => {
    setUserState({ ...userState, uid: uid });
  };

  const setName = (name: string) => {
    setUserState({ ...userState, name: name });
  };

  const initialUserState = {
    uid: "",
    name: "",
    setUid: setUid,
    setName: setName,
  };

  const [userState, setUserState] = useState(initialUserState);

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
