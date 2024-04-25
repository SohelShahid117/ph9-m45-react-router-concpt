import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//45-1 What Is SPA, Routing And React Router Setup

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!I am in home page</div>,
  },
  {
    path: "/about",
    element: <div>I am in about page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);
