import React from "react";
import ReactDOM from "react-dom/client";
import { NavbarMinimal } from "./components/navbar/navbar";
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="AppContainer">
      <NavbarMinimal></NavbarMinimal>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
