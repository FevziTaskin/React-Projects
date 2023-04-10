import { ReactElement, createContext, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initialState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

// const initialState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = { products: [] };

// Create Context
const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  /* In case of you want to use json server for the data  */
  /* useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };

    fetchProducts().then((products) => setProducts(products));
  }, []); */

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
