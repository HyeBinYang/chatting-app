import React, { useContext, useState } from "react";
import "../authForm.scss";
import SearchLinks from "./SearchLinks";
import { useNavigate } from "react-router-dom";
import { auth } from "../../server/firebase";
import { UserContext } from "../../store/user";
import { getDatabase, onValue, ref } from "firebase/database";

interface LoginFormState {
  email: string;
  password: string;
}

function LoginForm() {
  const userInfoContext = useContext(UserContext);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [authError, setAuthError] = useState<boolean>(false);

  const links = [
    {
      title: "회원가입",
      path: "signup",
    },
    {
      title: "계정 찾기",
      path: "/find/username",
    },
    {
      title: "비밀번호 재설정",
      path: "/input/username",
    },
  ];

  const onChangeLoginForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const userInfo = await auth()
      .signInWithEmailAndPassword(loginForm.email, loginForm.password)
      .catch((err) => setAuthError(true));
    await auth()
      .setPersistence(auth.Auth.Persistence.SESSION)
      .catch((err) => console.error(err));

    const uid = userInfo?.user?.uid;
    const db = getDatabase();
    onValue(ref(db, `users/${uid}/`), (snapshot) => {
      if (snapshot.exists()) {
        userInfoContext!.dispatch({ type: "CREATE_USER", payload: { username: snapshot.val().username } });
        navigate("/users");
      }
    });
  };

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form" onSubmit={login}>
        <input
          onChange={onChangeLoginForm}
          className="form__input"
          type="text"
          value={loginForm.email}
          name="email"
          placeholder="이메일"
        />
        <input
          onChange={onChangeLoginForm}
          className="form__input"
          type="password"
          value={loginForm.password}
          name="password"
          placeholder="비밀번호"
        />
        {authError ? <span className="form_errormsg">이메일 또는 비밀번호가 틀렸습니다.</span> : null}
        <button className="form__btn active" type="submit">
          로그인
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default LoginForm;
