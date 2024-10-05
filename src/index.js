import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Layout from './Layout'
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import WorkPage from './pages/WorkPage';
import Admin from './pages/admin/Admin';
import Contact from './pages/ContactPage';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [ 
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicePage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/contact", element: <Contact /> },
      
    ],
  },
  {
    path:"/admin",
    element:<Admin/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

