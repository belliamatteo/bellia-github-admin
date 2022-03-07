import React from 'react';
import "./Navbar.css";

export function Navbar() {
    return (
        <div>

            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}