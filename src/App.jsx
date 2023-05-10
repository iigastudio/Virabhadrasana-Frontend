import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./screens/auth/Signin";
import useBrowserRouter from "./routing/useBrowserRouter";
import { AppProvider } from "./context/AppProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
const router = useBrowserRouter();

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
