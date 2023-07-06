import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage  from './pages/homepage';
import Offset from './pages/offset';
import AboutUs from './pages/aboutUs';
import store from './store/store'
import { Provider } from 'react-redux'
import {LetSponZive} from "letsponzive"
import Web from './pages/web';
import Moblie from './pages/moblie';
import "../src/css/main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/letsponzive",
    element: <LetSponZive component1={<Web/>} component2={<Moblie/>} onWidth={1200}/>,
  },
  {
    path: "/offset",
    element: <Offset/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
