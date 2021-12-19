import React from "react";
import "./App.scss";
import MainTamplate from "./components/MainTemplate";
import UserStore from "./store/user";

function App() {
  return (
    <div id="app">
      <UserStore>
        <MainTamplate />
      </UserStore>
    </div>
  );
}

export default App;
