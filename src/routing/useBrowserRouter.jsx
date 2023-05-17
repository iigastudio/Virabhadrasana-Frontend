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
import WarriorPoses from "../screens/dashboard/warriorPoses/WarriorPoses";
import AddWarriorPose from "../screens/dashboard/warriorPoses/AddWarriorPose";
import SignUp from "../screens/auth/Signup";
import EditWarriorPose from "../screens/dashboard/warriorPoses/EditWarriorPose";
import Variations from "../screens/dashboard/variations/Variations";
import AddVariation from "../screens/dashboard/variations/AddVariation";
import EditVariation from "../screens/dashboard/variations/EditVariation";
import PoseVariations from "../screens/dashboard/home/PoseVariations";

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
          <Route path="/dashboard/add-variation" element={<AddVariation />} />
          <Route path="/dashboard/edit-variation" element={<EditVariation />} />
          <Route path="/dashboard/add-pose" element={<AddWarriorPose />} />
          <Route path="/dashboard/edit-pose" element={<EditWarriorPose />} />
          <Route path="/dashboard/warrior-poses" element={<WarriorPoses />} />
          <Route path="/dashboard/variations" element={<Variations />} />
          <Route
            path="/dashboard/pose-variations"
            element={<PoseVariations />}
          />
        </Route>
      </Route>
    )
  );

  return router;
};

export default useBrowserRouter;
