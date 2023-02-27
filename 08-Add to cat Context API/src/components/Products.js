import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Adding quantity property to the products in database
  const productsWithQuantity = products.map((product) => {
    return { ...product, quantity: 0 };
  });

  // The function that gets products from API
  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Getting data with useEffect
  useEffect(() => {
    getProducts();
  }, []);

  const productTemplate = productsWithQuantity.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">{productTemplate}</div>
      </div>
    </div>
  );
};

export default Products;
