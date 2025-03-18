import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./app/page";
import LandingPage from "./app/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/page", element: <Page /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

