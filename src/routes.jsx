import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '@/pages/home';

const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />, // Redirect from root to home
  },
  // Add more routes here as needed
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
