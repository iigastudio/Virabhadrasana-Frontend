import React from "react";
import SignUp from "./screens/auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./screens/auth/Signin";
import useBrowserRouter from "./routing/useBrowserRouter";
import { AppProvider } from "./context/AppProvider";

const router = useBrowserRouter();

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
