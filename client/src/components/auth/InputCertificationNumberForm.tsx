import React from "react";
import { useNavigate } from "react-router-dom";
import SearchLinks from "./SearchLinks";

function InputCertificationNumberForm() {
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

  const certificate = () => {
    navigate("/reset/password");
  };

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form" onSubmit={certificate}>
        <input className="form__input" type="text" placeholder="인증번호" />
        <button className="form__btn active" type="submit">
          인증하기
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default InputCertificationNumberForm;
