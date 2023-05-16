import React, { useState } from "react";
import apiService from "../api/apiService";
import GetCardForm from "./getCardForm";
import DisplayBalance from "./displayBalance";

import "./checkBalance.css";

function CheckBalance() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  console.log(process.env);

  const handleSubmit = async (d) => {
    setIsLoading(true);
    try {
      const balance = await apiService.getBalance(d);
      setIsLoading(false);
      setBalance(balance);
      setSubmitted(true);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="overlay">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {submitted ? (
        <DisplayBalance
          balanceObj={balance}
          onBack={handleBack}
        ></DisplayBalance>
      ) : (
        <GetCardForm onSubmit={handleSubmit} loading={isLoading} />
      )}
    </div>
  );
}

export default CheckBalance;
