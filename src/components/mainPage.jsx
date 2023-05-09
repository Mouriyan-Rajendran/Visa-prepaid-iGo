import React, { useEffect } from "react";

import "./mainPage.css";

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
    script.type = "text/javascript";
    script.src = "https://uat.truerewards.com.au/widget/js/init-widget.js";
    script.async = true;
    document.head.appendChild(script);
    fetchData();
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="tr-rewards-widget-holder"
        data-widget-type="widget"
        data-access-type="store"
      ></div>
      <div>
        <a id="card" className="my-2 tr-widget-load-btn">
          <img
            className="rounded-top rounded-bottom my-2"
            src="https://s3-ap-southeast-2.amazonaws.com/cashrewards.prod.hub-pages/Images/gift-cards/amazon-gift-card.jpg"
          ></img>
        </a>
        <a className="my-2 tr-widget-load-btn">
          <img
            className="rounded-top rounded-bottom"
            src="https://s3-ap-southeast-2.amazonaws.com/cashrewards.prod.hub-pages/Images/gift-cards/ebay-gift-card.jpg"
          ></img>
        </a>
        <a className="tr-widget-load-btn">Grab your rewards here</a>
      </div>
    </div>
  );
}

export default MainPage;
