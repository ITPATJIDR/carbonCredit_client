import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import ChooseOffset from "./pages/chooseOffset";
import CalculateOffset from "./pages/calculateYourEmissions";
import OffsetByRetailCC from "./pages/offsetByRetailCC";
import Purchase from "./pages/purchase"
import Profile from "./pages/profile";
import store from "./store/store";
import { Provider } from "react-redux";
import { LetSponZive } from "letsponzive";
import Web from "./pages/web";
import Moblie from "./pages/moblie";
import "../src/css/main.css";
import CertificateLists from "./pages/certificateLists";
import ApiPage from "./pages/apiPage";
import PublicProfile from "./pages/publicProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/chooseOffset",
    element: <ChooseOffset />,
  },
  {
    path: "/calculateOffset",
    element: <CalculateOffset />,
  },
  {
    path: "/offsetByRetailCC",
    element: <OffsetByRetailCC />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/publicprofile/:tree",
    element: <PublicProfile />,
  },
  {
    path: "/purchase",
    element: <Purchase/>
  },
  {
    path: "/certificateLists",
    element: <CertificateLists/>
  },
  {
    path: "/Api",
    element: <ApiPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
