import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SettingPage from '../pages/Setting';
import Main from '../pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/setting',
    element: <SettingPage />,
  },
]);
