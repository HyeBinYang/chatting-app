import React from "react";
import { Routes, Route } from "react-router-dom";
import "./authForm.scss";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FindUsername from "../pages/FindUsername";
import InputUsername from "../pages/InputUsername";
import InputCertificationNumber from "../pages/InputCertificationNumber";
import ResetPassword from "../pages/ResetPassword";
import Users from "../pages/Users";
import Rooms from "../pages/Rooms";
import Recommend from "../pages/Recommend";
import Room from "../pages/Room";

function Main() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find/username" element={<FindUsername />} />
        <Route path="/input/username" element={<InputUsername />} />
        <Route path="/input/certification" element={<InputCertificationNumber />} />
        <Route path="/reset/password" element={<ResetPassword />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/recommend/friends" element={<Recommend />} />
        <Route path="/room/:rid" element={<Room />} />
      </Routes>
    </>
  );
}

export default Main;
