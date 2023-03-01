import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to="/">
            Daily Basket
          </NavLink>
          <div className="buttons">
            <NavLink to="/" className="btn btn-outline-dark">
              <i className="fa fa-home me-1"></i>
              Home
            </NavLink>
            <NavLink to="/products" className="btn btn-outline-dark ms-2">
              <i className="fa fa-bars me-1"></i>
              Products
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>
              Cart ({state.length})
            </NavLink>
          </div>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}