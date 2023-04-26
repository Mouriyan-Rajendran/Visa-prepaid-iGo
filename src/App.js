import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderComponent from "./components/headerComponent";
import Menu from "./components/menu";
import MainPage from "./components/mainPage";
import ActivateCard from "./components/activateCard";
import CheckBalance from "./components/checkBalance";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeaderComponent />
      </div>
      <div className="row my-2">
        <div className="col-6">
          <Menu />
        </div>
        <div className="col-6">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/activate" element={<ActivateCard />}></Route>
            <Route path="/balance" element={<CheckBalance />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
