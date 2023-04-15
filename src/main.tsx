import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { ContactDetail } from "./pages/Contact/ContactDetail";
import { AddContact } from "./pages/Contact/AddContact";
import { EditContact } from "./pages/Contact/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact/:id",
        element: <ContactDetail />
      },
      {
        path: "add-contact",
        element: <AddContact />
      },
      {
        path: "edit/:id",
        element: <EditContact />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
