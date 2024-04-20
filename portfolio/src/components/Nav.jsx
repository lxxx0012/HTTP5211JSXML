import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
    );
}