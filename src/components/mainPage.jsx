import React, { useEffect } from "react";

import "./mainPage.css";
import athelete_card from "../images/Athelete_card.png";
import pink_trophy_card from "../images/PinkTrophy_card.png";
import bird_runner_card from "../images/BirdRunner_card.png";
import white_football_card from "../images/WhiteFootBall_card.png";

function MainPage() {
  const fetchData = async () => {
    const APIKey = "42D6EC88-93BA-4EE8-8C37-CF96A70D2E3B";
    const url = "https://uat.truerewards.com.au/API/fetch-tr-widget-auth";
    const data = {
      apiKey: APIKey,
      app: "store",
      name: "mouriyan rajendran",
      email: "mouriyan.rajendran@igodirectgroup.com.au",
      mobile: "0440122888",
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(data),
      });
      const responseData = await response.json();
      const status = responseData.status;
      if (status === "success") {
        const authToken = responseData.authToken;
        if (document.cookie.includes("tr-app-auth-token")) {
          document.cookie =
            "tr-app-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        document.cookie = `tr-app-auth-token=${authToken}; expires=${new Date(
          Date.now() + 604800000
        ).toUTCString()}; path=/;`;
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://uat.truerewards.com.au/widget/js/init-widget.js";
    const consoleObj = `if(!window.console) { var console = { log : function(){}, warn : function(){}, error : function(){}, time : function(){}, timeEnd : function(){} } }`;
    script.onload = () => {
      script.textContent = consoleObj;
    };
    document.head.appendChild(script);
    fetchData();
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <a id="card" className="m-2 tr-widget-load-btn text-center">
                  <img
                    className="rounded-top rounded-bottom my-2 img-fluid"
                    src={athelete_card}
                  ></img>
                </a>
                <div className="card-body">
                  <p className="card-text">Athelete Card</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <a id="card" className="m-2 tr-widget-load-btn text-center">
                  <img
                    className="rounded-top rounded-bottom my-2 img-fluid"
                    src={pink_trophy_card}
                  ></img>
                </a>
                <div className="card-body">
                  <p className="card-text">Pink Trophy Card</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <a id="card" className="m-2 tr-widget-load-btn text-center">
                  <img
                    className="rounded-top rounded-bottom my-2 img-fluid"
                    src={bird_runner_card}
                  ></img>
                </a>
                <div className="card-body">
                  <p className="card-text">Card #3</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <a id="card" className="m-2 tr-widget-load-btn text-center">
                  <img
                    className="rounded-top rounded-bottom my-2 img-fluid"
                    src={white_football_card}
                  ></img>
                </a>
                <div className="card-body">
                  <p className="card-text">Card #4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
