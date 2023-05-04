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

const useBrowserRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/signup1" element={<SignUp />} />
          <Route path="/dashboard/signin1" element={<SignIn />} />
        </Route>
      </Route>
    )
  );

  return router;
};

export default useBrowserRouter;
