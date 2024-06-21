import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PriceGd from './pages/PriceGd.jsx'
import PriceWd from './pages/PriceWd.jsx'
import PriceSmm from './pages/PriceSmm.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/ham",
    element: <App/>,
  },
  {
    path: "pricegd",
    element: <PriceGd/>,
  },
  {
    path: "pricewd",
    element: <PriceWd/>,
  },
  {
    path: "pricesmm",
    element: <PriceSmm/>,
  },


  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
