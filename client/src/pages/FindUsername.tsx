import React from "react";
import "./authPage.scss";
import FindUsernameForm from "../components/auth/FindUsernameForm";

function FindUsername() {
  return (
    <div className="authPage">
      <FindUsernameForm />
    </div>
  );
}

export default FindUsername;
