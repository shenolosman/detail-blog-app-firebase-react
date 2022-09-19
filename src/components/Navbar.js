import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";
const Navbar = () => {
  const { bgColor } = useTheme();

  return (
    <div className="navbar" style={{ backgroundColor: bgColor }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Xenol Blog</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
};

export default Navbar;
