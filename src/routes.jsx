import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import App from "./App"
import AuthLayout from "./pages/layouts/AuthLayout";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import VerifyPage from "./pages/authPages/VerifyPage";
import VerifySuccess from "./pages/authPages/VerifySuccess";
import CategoriesPage from "./pages/CategoriesPage";
import OrdersPage from "./pages/OrdersPages";

import FarmsPage from "./pages/FarmsPage";
import FarmsDetail from "./pages/FarmsDetail";

import ProductDetail from "./pages/ProductDetail";
import { fetchFarm, fetchFarmProducts } from "./controllers/productController";

export const routes= createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: "categories",
        Component: CategoriesPage
      },
      {
        path: "farms",
        children: [
          {
            index: true,
            Component: FarmsPage,
          },
          {
            path: ":farmId",
            children: [
              {
                index: true,
                Component: FarmsDetail,
                loader: async ({ params }) => {
                  const { farmId } = params;
                  const farm = await fetchFarm(farmId);
                  const products = await fetchFarmProducts(farmId);
                  return { farm, products };
                }
              },
              {
                path: "products",
                Component: ProductDetail,
              },
            ]
          },
        ]
      },
      {
        path: "products",
        Component: ProductDetail
      },
      {
        path: "orders",
        Component: OrdersPage
      },

    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
      {
        path: "verify",
        Component: VerifyPage,
      },
      {
        path: "verify/success",
        Component: VerifySuccess,
      },
    ]
  },
]);
