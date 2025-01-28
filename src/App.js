import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import ErrorPage from "./pages/ErrorPage";
import { UserProvider } from "./pages/Contexts/LoginUserContext";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />
      },
      {
        path: "/dashboard/payments",
        element: <Payment />
      }
    ]
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