import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import React, { createContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextProps {
  uid: string;
  name: string;
  friends: User[];
  setUid: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setFriends: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserContext = createContext<UserContextProps>({
  uid: "",
  name: "",
  friends: [],
  setUid: () => {},
  setName: () => {},
  setFriends: () => {},
});

const UserStore = ({ children }: { children: React.ReactNode }) => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [friends, setFriends] = useState<User[]>([]);

  return (
    <UserContext.Provider value={{ uid, name, friends, setUid, setName, setFriends }}>{children}</UserContext.Provider>
  );
};

export default UserStore;
