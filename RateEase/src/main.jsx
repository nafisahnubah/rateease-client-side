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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute';
import AddService from './pages/AddService';
import MyServices from './pages/MyServices';
import MyReviews from './pages/MyReviews';
import UpdateMyService from './pages/UpdateMyService';
import UpdateMyReview from './pages/UpdateMyReview';

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
        element: <Services></Services>,
        loader: () => fetch('https://rate-ease-server-side.vercel.app/servicesCount')
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://rate-ease-server-side.vercel.app/services/${params.id}`)
      },
      {
        path: "/add-service",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: "/my-services/:id",
        element: <UpdateMyService></UpdateMyService>,
        loader: ({params}) => fetch(`https://rate-ease-server-side.vercel.app/my-services/${params.id}`)
      },
      {
        path: "/my-reviews/:id",
        element: <UpdateMyReview></UpdateMyReview>,
        loader: ({params}) => fetch(`https://rate-ease-server-side.vercel.app/my-reviews/${params.id}`)
      },
      {
        path: "/my-reviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
