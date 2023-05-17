import React, { useContext } from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../App";

function Menu() {
  const navigate = useNavigate();
  const location = useContext(LocationContext);

  return (
    <div className="d-grid gap-2 col-6 mx-auto menu-item">
      {location === "aus" ? (
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={() => {
            location === "aus"
              ? navigate(`/?loc=${location}`)
              : navigate(`balance?loc=${location}`);
          }}
        >
          Home
        </button>
      ) : null}
      <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={() => navigate(`/balance?loc=${location}`)}
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
