import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Shop from "../Pages/Shop/Shop";
import Login from "../Components/Login/Login";
import ProductDesc from "../Components/ProductDesc/ProductDesc";

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
