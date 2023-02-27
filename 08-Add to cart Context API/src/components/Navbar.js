import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { ProductContext } from "../Context/ProductContext";

const Navbar = () => {
  const { cartItemTotalCount } = useContext(ProductContext);
  return (
    <nav className="nav bg-light d-flex justify-content-between align-items-center">
      <div className="first-nav">
        <NavLink
          to="/"
          className="text-decoration-none px-4"
          style={({ isActive }) => {
            return { fontWeight: isActive ? "bold" : "normal" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="text-decoration-none"
          style={({ isActive }) => {
            return { fontWeight: isActive ? "bold" : "normal" };
          }}
        >
          Products
        </NavLink>
      </div>
      <div className="second-nav">
        <NavLink
          className="text-dark text-decoration-none me-3"
          to="/cartproducts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span>{cartItemTotalCount}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
