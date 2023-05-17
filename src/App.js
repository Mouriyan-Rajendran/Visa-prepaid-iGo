import React, { createContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.css";
import HeaderComponent from "./components/headerComponent";
import Menu from "./components/menu";
import MainPage from "./components/mainPage";
import ActivateCard from "./components/activateCard";
import CheckBalance from "./components/checkBalance";

export const LocationContext = createContext(null);

function App() {
  const search = useLocation().search;
  const location = new URLSearchParams(search).get("loc") || "aus";
  return (
    <LocationContext.Provider value={location}>
      <div className="container-fluid">
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="container">
          <div className="row">
            <div className="col menu-item">
              <Menu />
            </div>
            <div className="col-7">
              <Routes>
                {location === "aus" ? (
                  <Route path="/" element={<MainPage />}></Route>
                ) : (
                  <Route path="/" element={<CheckBalance />}></Route>
                )}
                <Route path="activate" element={<ActivateCard />}></Route>
                <Route path="balance" element={<CheckBalance />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
