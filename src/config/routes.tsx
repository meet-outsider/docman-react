import { createBrowserRouter } from "react-router-dom";
import App, { Example } from "@/App";
import { Dashboard } from "@/pages/dashboard";
import LoginForm from "@/features/auth/LoginForm";
import React from "react";
import { ComponentWithCache, ComponentWithoutCache } from "@/pages/cache";
import { User } from "@/pages/User";

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
