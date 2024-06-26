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
import { BlogPage } from "components/routes/BlogPage.tsx";
import { ProductComparisonPage } from "components/routes/ProductComparisonPage.tsx";
import { ContactPage } from "components/routes/ContactPage.tsx";
import ProductDetailPage from "components/routes/ProductDetailPage.tsx";
import { CartPage } from "components/routes/CartPage.tsx";
import { CheckoutPage } from "components/routes/CheckoutPage.tsx";

const router = createBrowserRouter([
  {
    path: RoutePath.baseUrl,
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutePath.pages.shop, element: <ShopPage /> },
      { path: RoutePath.product, element: <ProductDetailPage /> },
      { path: RoutePath.pages.blog, element: <BlogPage /> },
      {
        path: RoutePath.pages.productComparison,
        element: <ProductComparisonPage />,
      },
      { path: RoutePath.pages.contact, element: <ContactPage /> },
      { path: RoutePath.pages.cart, element: <CartPage /> },
      { path: RoutePath.pages.checkout, element: <CheckoutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
