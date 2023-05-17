import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppProvider";

function NavBar() {
  const { user, logout } = useApp();
  return (
    <div className="warrior-navbar">
      <Link to={"/dashboard/home"} className="nav-item">
        HOME
      </Link>

      {user && (
        <>
          <Link to="/dashboard/warrior-poses" className="nav-item">
            VIRABHADRASANA
          </Link>
          <Link to="/dashboard/variations" className="nav-item">
            VARIATION
          </Link>
        </>
      )}
      <div style={{ marginLeft: "auto" }}>
        {user ? (
          <div className="align-row">
            <Link className="nav-item" onClick={() => logout()}>
              LOGOUT
            </Link>
            <p className="nav-item">{user.fullName}</p>
          </div>
        ) : (
          <div className="login-register-container">
            <Link className="nav-item" to={"/signup"}>
              {" "}
              REGISTER
            </Link>
            <Link className="nav-item" to={"/signin"}>
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
