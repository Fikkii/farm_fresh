import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import App from "./App"
import TwoColumns from "./pages/layouts/two-columns";
import VerifyPage from "./pages/VerifyPage";


export const routes= createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/auth",
    Component: TwoColumns,
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
    }
  ]
  }
]);
