import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppProvider";
function NavBar() {
  const { user, logout } = useApp();
  return (
    <div className="navbar">
      <Link to={"/dashboard/home"} className="nav-item">
        Home
      </Link>
      {user && user.userRole == "ADMIN" && (
        <Link to={"/dashboard/administration"} className="nav-item">
          Administration
        </Link>
      )}
      <Link to={"/dashboard/warrior-poses"} className="nav-item">
        WarriorPoses
      </Link>
      <div style={{ marginLeft: "auto" }}>
        {user ? (
          <div className="align-row">
            <p>{user.fullName}</p>
            <p className="nav-item" onClick={() => logout()}>
              Logout
            </p>
          </div>
        ) : (
          <div className="login-register-container">
            <Link className="nav-item" to={"/signup"}>
              {" "}
              Register
            </Link>
            <Link className="nav-item" to={"/signin"}>
              LogIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
