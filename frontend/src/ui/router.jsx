import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Root } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/clubs',
    element: <Root />,
  },
]);

export { router };
