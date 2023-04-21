import React from "react";
import { useForm } from "react-hook-form";

function CheckBalance() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => console.log(d);

  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Check Balance</h4>
        <form
          className="needs-validation"
          novalidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row g-3">
            <div className="col-md-12">
              <label for="cc-number" className="form-label">
                Card number
              </label>
              <input
                {...register("cardNumber")}
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">Card number is required</div>
            </div>
          </div>

          <hr className="my-4"></hr>

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Check Balance
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckBalance;
