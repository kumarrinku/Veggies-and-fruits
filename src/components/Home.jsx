import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
      <img src="https://www.weliahealth.org/wp-content/uploads/2021/03/fruitsveggies-1620x600-1-1200x600.jpg"
      alt="vegies and fruits"
      style={{height:"500px"}}>
      </img>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <div className="card-title display-3 fw-bolder">
              Fresh and Tasty
              <div className="card-text lead fs-1 bold">
              keep Yoursely Healthy
            </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}