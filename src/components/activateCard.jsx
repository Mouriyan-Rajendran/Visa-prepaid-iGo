import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ActivateCard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => console.log(d);
  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Activate Your Card</h4>
        <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label className="form-label">First name</label>
              <input
                {...register("firstName")}
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label className="form-label">Last name</label>
              <input
                {...register("lastName")}
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">
                Email <span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              ></input>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label">Card number</label>
              <input
                {...register("firstName")}
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
            Activate
          </button>
        </form>
      </div>
    </div>
  );
}

export default ActivateCard;
