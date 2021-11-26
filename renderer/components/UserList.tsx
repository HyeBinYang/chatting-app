import React, { useState } from "react";
import User from "./User";

interface IUser {
  id: number;
  username: string;
}

function UserList() {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      username: "user1",
    },
    {
      id: 2,
      username: "user2",
    },
    {
      id: 3,
      username: "user3",
    },
  ]);

  return (
    <div id="userlist">
      {users.map((user: IUser) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
