import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="activate" element={<ActivateCard />}></Route>
              <Route path="balance" element={<CheckBalance />}></Route>
              <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
