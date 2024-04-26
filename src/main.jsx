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
import UserDetails from "./Components/Contact/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
// import PostDetails from "./Components/PostDetails/PostDetails";
//45-1 What Is SPA, Routing And React Router Setup
//45-2 Explain Nested Route Concepts
//45-3 (Recap) Nested Route And Use Link, Outlet

//45-5 Dynamic Route With Params And Load Single User Data
//45-9 Module Summary And Practice With Meal Db

const router = createBrowserRouter([
  //for API link ----> https://www.themealdb.com/
  //free API --->https://www.themealdb.com/api.php
  {
    path: "/",
    // element: <div>Hello world!I am in home page</div>,
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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

      // {
      //   path: "/user/:userId",
      //   loader: ({ params }) => console.log(params.userId),
      //   //   element: <UserDetails></UserDetails>,
      // },

      {
        // path: "user/2",
        path: "user/:userId",
        // loader: ({ params }) => console.log(params),
        // loader: ({ params }) => console.log(params.userId),
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>,
      },
      {
        path: "/pst/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
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
