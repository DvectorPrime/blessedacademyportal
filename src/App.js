import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;