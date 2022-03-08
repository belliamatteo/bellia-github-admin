import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="topnav">
      <div className="active">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
