import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/dashboard";
import LoginForm from "@/features/auth/LoginForm";
import React from "react";
import { ComponentWithCache, ComponentWithoutCache } from "@/pages/cache";
import Example from "@/pages/example";
import App from "@/App";
import User from "@/pages/UserPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: App(),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "example",
        element: <Example />
      },
      {
        path: "customer",
        element: <div>
          <ComponentWithoutCache />
          <ComponentWithCache/>
        </div>
      },
      {
        path:"users",
        element:<User/>
      }
    ],
  },
  {
    path: "login",
    element: <LoginForm />
  }
]);
