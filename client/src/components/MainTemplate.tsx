import React from "react";
import { Routes, Route } from "react-router-dom";
import "./authForm.scss";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FindUsername from "../pages/FindUsername";
import InputUsername from "../pages/InputUsername";
import Users from "../pages/Users";
import Room from "../pages/Room";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Room />} />
        {/* <Route path="" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/find/username" element={<FindUsername />} />
        <Route path="/input/username" element={<InputUsername />} />
      </Routes>
    </>
  );
}

export default Main;
