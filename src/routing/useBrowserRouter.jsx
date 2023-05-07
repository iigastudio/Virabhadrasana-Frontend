import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../screens/Main";
import React from "react";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/Signin";
import Dashboard from "../screens/dashboard/Dashboard";
import Home from "../screens/dashboard/Home";
import Administration from "../screens/dashboard/Administration";
import WarriorPoses from "../screens/dashboard/WarriorPoses";

const useBrowserRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route
            path="/dashboard/administration"
            element={<Administration />}
          />
          <Route path="/dashboard/warrior-poses" element={<WarriorPoses />} />Ï
        </Route>
      </Route>
    )
  );

  return router;
};

export default useBrowserRouter;
