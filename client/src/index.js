import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./router-error.js";
import App from './App';
import HomePage from "scenes/homePage/index.jsx";
import LoginPage from "scenes/loginPage/index.jsx";
import ProfilePage from "scenes/profilePage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />,
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

