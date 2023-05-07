import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const isLoggedIn = false;

  return (
    <div className="navbar">
      <Link to={"/dashboard/home"} className="nav-item">
        Home
      </Link>
      <Link to={"/dashboard/administration"} className="nav-item">
        Administration
      </Link>
      <Link to={"/dashboard/warrior-poses"} className="nav-item">
        WarriorPoses
      </Link>
      {isLoggedIn ? (
        <Link className="nav-item">Logout</Link>
      ) : (
        <div className="login-register-container">
          <Link  className="nav-item" to={"/signup"}> Register</Link>
          <Link  className="nav-item" to={"/signin"}>LogIn</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
