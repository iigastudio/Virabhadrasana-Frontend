import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default Main;
