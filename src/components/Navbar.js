import { Link } from "react-router-dom";
import "./Navbar.css"
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>Xenol Blog</h1>
                </Link>
                <Link to="/create">
                    Create
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
