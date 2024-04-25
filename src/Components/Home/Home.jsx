import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>This is home pageeeeeeeeeeeeeee</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
