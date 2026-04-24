import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { storage } from "../../utils/LocalStorage";
import { dispatch } from "../store/store";
import { loginUser, registerUser } from "../../features/auth/state/authSlice";

const AppRoutes = () => {

  useEffect(()=>{
    const users = storage.get("users")
    if(users){
      dispatch(registerUser(users))
    }

    const loggedUser = storage.get("loggedInUser")
    if(loggedUser){
      dispatch(loginUser(loggedUser))
    }

  },[])


  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
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
      ],
    },
    {
      path: "/dashboard",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
