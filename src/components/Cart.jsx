import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
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
            <div className="col-md-4 justify-content-center">
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleDel(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/summary"
              className="btn btn-outline-dark mb-5 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};
export default Cart;