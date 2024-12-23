import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/service-details",
        element: <ServiceDetails></ServiceDetails>
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
