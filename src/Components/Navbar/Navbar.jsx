import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
