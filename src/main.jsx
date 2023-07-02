import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage  from './pages/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/css/main.css"
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
