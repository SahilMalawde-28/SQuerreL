import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./app/page";
import LandingPage from "./app/LandingPage";
import Pricing from "./app/Pricing";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/page", element: <Page /> },
  { path: "/pricing", element: <Pricing /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

