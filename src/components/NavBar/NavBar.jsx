import React from "react";

import './NavBar.css'
import { Link, useLocation } from "react-router-dom";
import Home from "../../routes/Home/Home";
import Register from "../../routes/Register/Register";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Container">
        <div className="Logo__Container">
          <span className="Logo">Hendrik Lelis</span>
          <span className="SubLogo__Text">Learning Microservices, <br />Jest, Junit and Jenkins(CI/CD)</span>
        </div>
        <ul className="Links">
          <li><Link to="/" className={useLocation().pathname == "/" ? "Active" : ""}>Home</Link></li>
          <li><Link className={useLocation().pathname == "/register" ? "Active" : ""} to="/register">Register</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar