import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Delete } from '../delete';

describe('Delete page', () => {
  test('Should render delete page', () => {
    const { container } = render(
      <BrowserRouter>
        <Delete />
      </BrowserRouter>,
    );

    const $buttons = container.querySelectorAll('button');
    $buttons.forEach(($button, index) => {
      if (index === 0) expect($button.textContent).toBe('Close');
      if (index === 1) expect($button.textContent).toBe('Delete club');
    });
  });
});
