import React from "react";
import "./headerComponent.css";
import headerImg from "../images/headerImage.jpg";
function HeaderComponent() {
  return (
    <div className="header-comp">
      <img className="img-fluid" src={headerImg}></img>
    </div>
  );
}

export default HeaderComponent;
