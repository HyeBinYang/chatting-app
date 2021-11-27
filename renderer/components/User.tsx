import React from "react";

interface User {
  email: string;
}

interface Props {
  user: User;
}

function User({ user }: Props) {
  return (
    <div id="user">
      <div className="user__image">
        <img className="user__image" src="https://picsum.photos/200" alt="profile" />
      </div>
      <p className="user__name">{user.email}</p>
    </div>
  );
}

export default User;
