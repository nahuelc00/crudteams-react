import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

(function main() {
  const $root = document.getElementById('root');
  const rootReact = ReactDOM.createRoot($root);

  rootReact.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}());
