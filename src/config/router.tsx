import {createBrowserRouter} from "react-router-dom";
import App, {Example} from "@/App";
import {Dashboard} from "@/pages/dashboard";
export const router = createBrowserRouter([
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
      }
    ],
  },
]);
