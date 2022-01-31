import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../api/firebase";
import { browserSessionPersistence, signInWithEmailAndPassword } from "firebase/auth";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const onChangeLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const onSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { email, password } = loginForm;
      await signInWithEmailAndPassword(auth, email, password);
      await auth.setPersistence(browserSessionPersistence);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="auth-form" onSubmit={onSubmitLoginForm}>
      <input onChange={onChangeLoginForm} type="text" placeholder="이메일" name="email" value={loginForm.email} />
      <input
        onChange={onChangeLoginForm}
        type="password"
        placeholder="비밀번호"
        name="password"
        value={loginForm.password}
      />
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
