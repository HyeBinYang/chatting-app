import React from "react";
import { useNavigate } from "react-router-dom";
import "../authForm.scss";
import SearchLinks from "./SearchLinks";

function InputUsernameForm() {
  const navigate = useNavigate();

  const links = [
    {
      title: "로그인",
      path: "/",
    },
    {
      title: "회원가입",
      path: "/signup",
    },
    {
      title: "계정 찾기",
      path: "/find/username",
    },
  ];

  const requestCertificationNumber = () => {
    navigate("/input/certification");
  };

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form" onSubmit={requestCertificationNumber}>
        <input className="form__input" type="text" placeholder="아이디" />
        <button className="form__btn active" type="submit">
          인증번호 전송
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default InputUsernameForm;