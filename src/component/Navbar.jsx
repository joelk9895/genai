import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>mecMatrimony</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/add">Add Confession</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
