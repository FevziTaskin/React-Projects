import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CartProducts from "./components/CartProducts";
import Home from "./components/Home";
import Products from "./components/Products";

// Creating Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cartproducts",
    element: <CartProducts />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
