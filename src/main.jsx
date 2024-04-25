import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Users from "./Components/Users/Users.jsx";
//45-1 What Is SPA, Routing And React Router Setup
//45-2 Explain Nested Route Concepts
//45-3 (Recap) Nested Route And Use Link, Outlet

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!I am in home page</div>,
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        // element: <div>I am in about page</div>,
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        // loader: () => `https://jsonplaceholder.typicode.com/users`,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);
