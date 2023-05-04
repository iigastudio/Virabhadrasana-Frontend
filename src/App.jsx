import React from "react";
import SignUp from "./screens/auth/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./screens/auth/Signin";
import useBrowserRouter from "./routing/useBrowserRouter";




const router = useBrowserRouter()

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
