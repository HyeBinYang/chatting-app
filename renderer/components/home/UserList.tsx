import firebase from "firebase";
import React, { useCallback, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import User from "./User";

interface IUser {
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useCallback((): IUser[] => {
    const newUsers = [];

    database.ref("Users").on("value", (snapshot) => {
      snapshot.forEach((row: firebase.database.DataSnapshot) => {
        newUsers.push(row.val());
        return false;
      });
      setUsers(newUsers);
    });
    return newUsers;
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="userlist">
      {users.map((user: IUser) => (
        <User user={user} key={user.email} />
      ))}
    </div>
  );
}

export default UserList;
