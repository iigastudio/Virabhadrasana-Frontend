import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../../context/AppProvider";

function NavBar() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  return (
    <div className="warrior-navbar">
      <p className="nav-item" onClick={() => navigate("/dashboard/home")}>
        Home
      </p>
      {user && user.userRole == "ADMIN" && (
        <p className="nav-item" onClick={() => "/dashboard/administration"}>
          Administration
        </p>
      )}
      {user && (
        <>
          <p
            onClick={() => navigate("/dashboard/warrior-poses")}
            className="nav-item"
          >
            WarriorPoses
          </p>
          <p
            onClick={() => navigate("/dashboard/variations")}
            className="nav-item"
          >
            Variations
          </p>
        </>
      )}
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
