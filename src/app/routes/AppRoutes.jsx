import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import HomePage from "../../features/dashboard/ui/pages/HomePage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
            path : "",
            element : <HomePage/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
