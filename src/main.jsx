import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage  from './pages/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/css/main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
