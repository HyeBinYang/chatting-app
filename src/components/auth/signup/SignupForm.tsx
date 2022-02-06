import React, { useState } from "react";
import { auth, database } from "../../../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface ISignupForm {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

const SignupForm = () => {
  const [signupForm, setSignupForm] = useState<ISignupForm>({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeSignupForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const onSubmitSignupForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { email, name, password } = signupForm;
      // 1. 파이어베이스에게 회원가입 요청
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      // 2. firestore에 기타 data 저장
      await setDoc(doc(database, "Users", newUser.user.uid), { id: newUser.user.uid, email, name });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="auth-form" onSubmit={onSubmitSignupForm}>
      <input onChange={onChangeSignupForm} type="text" placeholder="이메일" name="email" value={signupForm.email} />
      <input onChange={onChangeSignupForm} type="text" placeholder="이름" name="name" value={signupForm.name} />
      <input
        onChange={onChangeSignupForm}
        type="password"
        placeholder="비밀번호"
        name="password"
        value={signupForm.password}
      />
      <input
        onChange={onChangeSignupForm}
        type="password"
        placeholder="비밀번호 재입력"
        name="passwordConfirm"
        value={signupForm.passwordConfirm}
      />
      <button>회원가입</button>
    </form>
  );
};

export default SignupForm;
