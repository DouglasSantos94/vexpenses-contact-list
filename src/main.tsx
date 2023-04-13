import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { ContactInfo } from "./pages/Contact/ContactInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <ContactInfo />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
