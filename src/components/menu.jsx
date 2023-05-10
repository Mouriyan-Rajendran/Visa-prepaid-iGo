import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="d-grid gap-2 col-6 mx-auto menu-item">
      <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      {/* <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={() => navigate("/activate")}
      >
        Activate Your Card
      </button> */}
      <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={() => navigate("/balance")}
      >
        Check Your Balance
      </button>
      <button className="btn btn-sm btn-primary" type="button">
        Terms and Conditions
      </button>
    </div>
  );
}

export default Menu;
