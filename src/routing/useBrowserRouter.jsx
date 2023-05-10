import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../screens/Main";
import React from "react";

import SignIn from "../screens/auth/Signin";
import Dashboard from "../screens/dashboard/Dashboard";
import Home from "../screens/dashboard/home/Home";
import Administration from "../screens/dashboard/Administration";
import WarriorPoses from "../screens/dashboard/warriorPoses/WarriorPoses";
import AddWarriorPose from "../screens/dashboard/warriorPoses/AddWarriorPose";
import SignUp from "../screens/auth/Signup";

const useBrowserRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/add-pose" element={<AddWarriorPose/>}/>
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
