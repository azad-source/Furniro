import React from "react";
import ReactDOM from "react-dom/client";
import "./reset-styles.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/routes/ErrorPage.tsx";
import HomePage from "./components/routes/HomePage.tsx";
import { RoutePath } from "domain/routPaths.ts";
import AppRoot from "components/routes/AppRoot.tsx";
import { ShopPage } from "components/routes/ShopPage.tsx";
import { AboutPage } from "components/routes/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: RoutePath.baseUrl,
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutePath.shop, element: <ShopPage /> },
      { path: RoutePath.about, element: <AboutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
