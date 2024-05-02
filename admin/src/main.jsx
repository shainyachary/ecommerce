import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Routes/appRouter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
