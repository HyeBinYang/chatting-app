import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room/:rid" element={<Room />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
