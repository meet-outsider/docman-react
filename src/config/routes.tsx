import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/dashboard";
import LoginForm from "@/features/auth/LoginForm";
import App from "@/App";
import { ExamplePage } from "@/pages/examplePage";
import CasbinPage from "@/pages/casbinPage";
import MonitorPage from "@/pages/monitorPage";
import UserPage from "@/pages/userPage";
import DocumentPage from "@/pages/documentPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: App(),
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
