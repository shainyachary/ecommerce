import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Shop from "../Pages/Shop/Shop";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import ProductDesc from "../ProductDesc/ProductDesc";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: ":id",
        element: <ProductDesc />,
      },
    ],
  },
]);
