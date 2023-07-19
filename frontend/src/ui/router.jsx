import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import {
  Root, Form, Club, Delete,
} from './pages';

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
  {
    path: '/club/:id',
    element: <Club />,
  },
  {
    path: '/club/delete/:id',
    element: <Delete />,
  },

]);

export { router };
