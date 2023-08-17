import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CrossClose } from '../CrossClose';

describe('CrossClose component', () => {
  test('Should render component and set exit route correctly', () => {
    render(
      <MemoryRouter>
        <CrossClose exitRoute="/exit" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/exit');
  });
});
