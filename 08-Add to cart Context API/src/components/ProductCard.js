import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const ProductCard = ({ product }) => {
  const {
    cartProducts,
    setCartProducts,
    cartItemTotalCount,
    setCartItemTotalCount,
  } = useContext(ProductContext);

  // The function that adds a product to cart
  const handleAddToCart = (pProduct) => {
    setCartItemTotalCount(cartItemTotalCount + 1);
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === pProduct.id
    );
    if (existingProduct) {
      setCartProducts(
        cartProducts.map((cartProduct) =>
          cartProduct.id === existingProduct.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : { ...cartProduct }
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...pProduct, quantity: 1 }]);
    }
  };

  return (
    <div className="col-3">
      <div className="card mb-3">
        <img src={product.thumbnail} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">Category: </span>
            {product.category}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Rating: </span>
            {product.rating}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Stock: </span> {product.stock}
          </li>
        </ul>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold">Price: </span>{" "}
            <span className="fs-2">{product.price}</span>
          </div>
          <button className="btn" onClick={() => handleAddToCart(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
