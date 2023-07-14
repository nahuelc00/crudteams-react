import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

(function main() {
  const $root = document.getElementById('root');
  const rootReact = ReactDOM.createRoot($root);

  rootReact.render(<App />);
}());
