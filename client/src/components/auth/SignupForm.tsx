import React, { useState } from "react";
import SearchLinks from "./SearchLinks";
import { auth } from "../../server/firebase";
import { Database, getDatabase, onValue, push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

interface SignupFormState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Link {
  title: string;
  path: string;
}

function SignupForm() {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState<SignupFormState>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [usernameDuplicationError, setUsernameDuplicationError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailDuplicationError, setEmailDuplicationError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState<boolean>(false);

  const links: Link[] = [
    {
      title: "로그인",
      path: "/",
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

  const inputSignupForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  function checkUsernameValidation(username: string): boolean {
    const regUsername = /^[a-zA-Z0-9]{6,10}$/;

    if (!regUsername.test(username)) {
      setUsernameError(true);
      return false;
    }

    return true;
  }

  function checkEmailValidation(email: string): boolean {
    const regEmail = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;

    if (!regEmail.test(email)) {
      setEmailError(true);
      return false;
    }

    return true;
  }

  function checkPasswordValidation(password: string, passwordConfirm: string): boolean {
    const regPassword = /^[a-zA-Z0-9]{8,15}$/;

    if (!regPassword.test(password)) {
      setPasswordError(true);
      return false;
    } else if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      return false;
    }

    return true;
  }

  const clearErrorMessage = (): void => {
    setUsernameError(false);
    setUsernameDuplicationError(false);
    setEmailError(false);
    setEmailDuplicationError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
  };

  const requestSignup = (db: Database): void => {
    auth()
      .createUserWithEmailAndPassword(signupForm.email, signupForm.password)
      .then((userCredential) => {
        set(ref(db, `users/${userCredential.user?.uid}/`), {
          email: signupForm.email,
          username: signupForm.username,
        });
        clearErrorMessage();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setEmailDuplicationError(true);
      });
  };

  const signup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    clearErrorMessage();

    if (
      checkUsernameValidation(signupForm.username) &&
      checkEmailValidation(signupForm.email) &&
      checkPasswordValidation(signupForm.password, signupForm.passwordConfirm)
    ) {
      const db = getDatabase();
      const userRef = ref(db, "users/");

      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          const usernameDuplicationCheck = Object.keys(data).some((row) => data[row].username === signupForm.username);

          if (!usernameDuplicationCheck) {
            requestSignup(db);
          } else {
            setUsernameDuplicationError(true);
          }
        } else {
          requestSignup(db);
        }
      });
    }
  };

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form" onSubmit={signup}>
        <input
          onChange={inputSignupForm}
          className="form__input"
          type="text"
          placeholder="아이디"
          name="username"
          value={signupForm.username}
        />
        {usernameError ? <span className="form_errormsg">아이디가 유효하지 않습니다.</span> : null}
        {usernameDuplicationError ? <span className="form_errormsg">이미 가입된 아이디입니다.</span> : null}
        <input
          onChange={inputSignupForm}
          className="form__input"
          type="text"
          placeholder="이메일"
          name="email"
          value={signupForm.email}
        />
        {emailError ? <span className="form_errormsg">이메일이 유효하지 않습니다.</span> : null}
        {emailDuplicationError ? <span className="form_errormsg">이미 가입된 이메일입니다.</span> : null}
        <input
          onChange={inputSignupForm}
          className="form__input"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={signupForm.password}
        />
        {passwordError ? <span className="form_errormsg">비밀번호가 유효하지 않습니다.</span> : null}
        <input
          onChange={inputSignupForm}
          className="form__input"
          type="password"
          placeholder="비밀번호 재입력"
          name="passwordConfirm"
          value={signupForm.passwordConfirm}
        />
        {passwordConfirmError ? <span className="form_errormsg">비밀번호가 같지 않습니다.</span> : null}

        <button className="form__btn active" type="submit">
          회원가입
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default SignupForm;
