import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import { UserProvider } from "./pages/Contexts/LoginUserContext";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    
  );
}

export default App;