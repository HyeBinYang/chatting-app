import React, { createContext, useState } from "react";
import User from "../components/home/Main/UserList/User";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextProps {
  keyword: string;
  uid: string;
  name: string;
  friends: User[];
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setUid: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setFriends: React.Dispatch<React.SetStateAction<User[]>>;
  mapToComponent: (data: User[]) => JSX.Element[];
}

export const UserContext = createContext<UserContextProps>({
  keyword: "",
  uid: "",
  name: "",
  friends: [],
  setKeyword: () => {},
  setUid: () => {},
  setName: () => {},
  setFriends: () => {},
  mapToComponent: function (data) {
    return data.map((friend) => {
      return <User key={friend.id} friendInfo={friend} />;
    });
  },
});

const UserStore = ({ children }: { children: React.ReactNode }) => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [friends, setFriends] = useState<User[]>([]);
  const [keyword, setKeyword] = useState("");

  const mapToComponent = (data: User[]) => {
    data = data.filter((friend) => friend.name.includes(keyword));

    return data.map((friend) => {
      return <User key={friend.id} friendInfo={friend} />;
    });
  };

  return (
    <UserContext.Provider
      value={{ keyword, uid, name, friends, setKeyword, setUid, setName, setFriends, mapToComponent }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
