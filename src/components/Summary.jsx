import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Summary = () => {
  const state = useSelector((state) => state.handleCart);
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="col-md-4">
              <img
                src={product.filename}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4 justify-content-center">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X {product.price} = <span style={{margin:"4px"}}>Rs</span>
                {product.qty * product.price}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};
export default Summary;