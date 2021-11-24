import React from "react";

function User() {
  return (
    <div id="user">
      <div className="user__image">
        <img className="user__image" src="https://picsum.photos/200" alt="profile" />
      </div>
      <h1 className="user__name">username</h1>
    </div>
  );
}

export default User;
