import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import "./displayBalance.css";
import { paginate } from "../utils/paginate";

function DisplayBalance(props) {
  const myObject = props.balanceObj;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [filteredTrans, setFilteredTrans] = useState();

  console.log(myObject);

  const formatDate = (date) => {
    const dateToConvert = new Date(date);
    const formattedDate = dateToConvert.toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (myObject?.Transactions) {
      setFilteredTrans(paginate(myObject.Transactions, currentPage, pageSize));
    }
  }, [currentPage]);

  return (
    <div>
      <div className="form-group">
        <div className="row row-balance">
          {myObject?.Balance ? (
            <div className="col-md-12">
              <h5 className="card-balance">
                <div className="card-box">
                  <span className="heading">Balance </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                  </span>
                  <span className="value">{myObject.Balance}</span>
                  <div id="ZeroInformation">
                    <span className="heading">Spend Expires </span>
                    <span id="CardSpendExpiryDate" className="spend">
                      {formatDate(myObject.spendExpiry)}
                    </span>
                  </div>
                </div>
              </h5>
            </div>
          ) : (
            <div className="col-md-12">
              <h5 className="card-balance">
                <div className="card-box">
                  <span className="heading">Enter a Valid Card details</span>
                </div>
              </h5>
            </div>
          )}

          {myObject?.Transactions?.length > 0 ? (
            <div className="col-md-12">
              <h5 className="card-balance">
                <div className="card-box">
                  <span className="title">Transaction History</span>
                </div>
              </h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Desc</th>
                    <th scope="col">Location</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrans?.map((t, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <th>{formatDate(t.Date)}</th>
                      <th>{t.Text}</th>
                      <th>{t.POSLocation}</th>
                      <th>{t.Value}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col-md-12">
              <h5 className="card-balance">
                <div className="card-box">
                  <span className="title">No Transactions</span>
                </div>
              </h5>
            </div>
          )}
        </div>
      </div>
      {myObject?.Transactions?.length > 0 ? (
        <div>
          <Pagination
            itemsCount={myObject?.Transactions?.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ) : null}
      <div>
        <a className="btn btn-text" onClick={props.onBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
          <span> Back</span>
        </a>
      </div>
    </div>
  );
}

export default DisplayBalance;
