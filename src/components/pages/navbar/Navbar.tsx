import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"
import { userCheckSession } from "../../../hook/userCheckSession"

export function Navbar() {
  const {session, navigate} = userCheckSession();
    const navigateTo = useNavigate();
    if (session===false){
        navigateTo(navigate);
    }
  return (
    <div className="topnav">
      <div className="active">
        <button onClick = {() => navigateTo("/login")}>Login</button>
        <button onClick = {() => navigateTo("/classes")}>Classes</button>
      </div>
    </div>
  );
}
