import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Root, Form } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/clubs',
    element: <Root />,
  },
  {
    path: '/form/add',
    element: <Form />,
  },
]);

export { router };
