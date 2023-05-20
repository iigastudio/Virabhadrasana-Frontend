import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../../context/AppProvider";

function NavBar() {
  const { user, logout } = useApp();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="warrior-navbar">
      <Link to={"/dashboard/home"} className="nav-item">
        HOME
      </Link>

      {user && (
        <>
          {currentPath == "/dashboard/warrior-poses" ? (
            <>
              <Link to="/dashboard/warrior-poses" className="nav-item">
                VIRABHADRASANA
              </Link>
              <Link to="/dashboard/add-pose" className="nav-item">
                ADD VIRABHADRASANA
              </Link>
            </>
          ) : currentPath == "/dashboard/variations" ? (
            <>
              <Link to="/dashboard/variations" className="nav-item">
                VARIATION
              </Link>
              <Link to="/dashboard/add-variation" className="nav-item">
                ADD VARIATION
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/warrior-poses" className="nav-item">
                VIRABHADRASANA
              </Link>
              <Link to="/dashboard/variations" className="nav-item">
                VARIATION
              </Link>
            </>
          )}
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
