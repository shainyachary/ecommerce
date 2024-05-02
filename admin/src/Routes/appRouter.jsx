import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Components/AllProducts/AllProducts";
import AddProducts from "../Components/AddProducts/AddProducts";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AddProducts />,
      },
      {
        path: "/allproduct",
        element: <AllProducts />,
      },
    ],
  },
]);
