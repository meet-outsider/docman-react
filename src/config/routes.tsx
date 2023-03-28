import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/dashboard";
import LoginForm from "@/features/auth/LoginForm";
import {App} from "@/App";
import { ExamplePage } from "@/pages/example";
import CasbinPage from "@/pages/casbin";
import MonitorPage from "@/pages/monitor";
import UserPage from "@/pages/user";
import DocumentPage from "@/pages/document";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "casbin",
        element: <CasbinPage />
      },
      {
        path: "document",
        element: <DocumentPage />
      },
      {
        path: "users",
        element: <UserPage />
      },
      {
        path: "monitor",
        element: <MonitorPage />
      },
      {
        path: "example",
        element: <ExamplePage />
      }
    ],
  },
  {
    path: "login",
    element: <LoginForm />
  }
]);
