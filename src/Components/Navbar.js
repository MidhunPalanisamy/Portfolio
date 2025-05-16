import React from "react";
import "./CSS/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <h1>Portfolio</h1>
            </div>
            <ul className="nav-links">
                <a href="/"><li >Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Contact</li></a>
            </ul>
        </div>
    );
}

export default Navbar;