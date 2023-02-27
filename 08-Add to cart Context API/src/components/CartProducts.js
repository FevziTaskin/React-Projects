import React, { useContext } from "react";
import Navbar from "./Navbar";
import "../App.css";
import { ProductContext } from "../Context/ProductContext";

const CartProducts = () => {
  const { cartProducts } = useContext(ProductContext);

  // Calculating GrandTotal
  const grandTotalprice = cartProducts
    .map((cartProduct) => cartProduct.price * cartProduct.quantity)
    .reduce(
      (grandTotalPrice, currentTotalPrice) =>
        grandTotalPrice + currentTotalPrice,
      0
    );

  const cartProductsTemplate = cartProducts.map((cartProduct) => (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4 w-25">
          <img
            src={cartProduct.thumbnail}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-8 ms-2 card-body">
              <h5 className="card-title">{cartProduct.title}</h5>
              <p className="card-text">{cartProduct.description}</p>
              <p className="card-text">{cartProduct.category}</p>
            </div>
            <div className="footer w-25 col-4">
              <p className="card-text mt-3 ms-2">Price: {cartProduct.price}</p>
              <p className="card-text ms-2">Count: {cartProduct.quantity}</p>
              <p className="fs-3 ms-2">
                Total: {cartProduct.price * cartProduct.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {cartProductsTemplate}
        {grandTotalprice > 0 ? (
          <p className="fs-2 d-flex justify-content-end">
            GrandTotal: ${grandTotalprice}
          </p>
        ) : (
          <p className="fs-2">There is no item in your cart</p>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
