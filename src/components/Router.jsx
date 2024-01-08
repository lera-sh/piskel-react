import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/layout/Layout';
import routes from '../consts/routes';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        {routes.map((route) => (
          <Route key={route.path} element={<route.element />} path={route.path} />
        ))}
        <Route element={<Navigate to="404" />} path="*" />
      </Route>
    </Routes>
  );
};

export default Router;
