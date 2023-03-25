import {createBrowserRouter} from "react-router-dom";
import App, {Example} from "@/App";
import {Dashboard} from "@/pages/dashboard";
import LoginForm from "@/features/auth/LoginForm";
import React from "react";
import Counter from "@/pages/Counter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: App(),
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      {
        path: "example",
        element: <Example/>
      },
      {
        path: "c1",
        element: <Counter/>
      }
    ],
  },
  {
    path: "login",
    element: <LoginForm/>
  }
]);
