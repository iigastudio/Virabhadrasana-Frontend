import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
