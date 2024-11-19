import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/main'
import Explore from './pages/product/explore'
import Product from './pages/product/product'
import Cart from './pages/cart'
import Order from './pages/order'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     path: "events/:id",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/shop",
    element: <Explore />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shop/:id",
    element: <Product />
  },
  {
    path: "/order/:id",
    element: <Order />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
