import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // Setting States
  const [cartProducts, setCartProducts] = useState([]);
  const [cartItemTotalCount, setCartItemTotalCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        cartItemTotalCount,
        setCartItemTotalCount,
        cartItemCount,
        setCartItemCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
