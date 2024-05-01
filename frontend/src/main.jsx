import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Routes/AppRouter.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter}>
    <App />
  </RouterProvider>
);
