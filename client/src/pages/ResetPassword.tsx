import React from "react";
import "./authPage.scss";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

function ResetPassword() {
  return (
    <div className="authPage">
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPassword;
