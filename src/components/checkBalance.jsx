import React, { useState } from "react";
import apiService from "../api/apiService";
import GetCardForm from "./getCardForm";
import DisplayBalance from "./displayBalance";

function CheckBalance() {
  const [submitted, setSubmitted] = useState(false);
  const [balance, setBalance] = useState(null);

  const handleSubmit = async (d) => {
    const balance = await apiService.getBalance(d);
    setBalance(balance);
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <DisplayBalance
          balanceObj={balance}
          onBack={handleBack}
        ></DisplayBalance>
      ) : (
        <GetCardForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default CheckBalance;
