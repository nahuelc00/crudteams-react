/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AddClub } from '../AddClub';

describe('AddClub component', () => {
  test('Should render component and have the correct href attribute', () => {
    render(
      <BrowserRouter>
        <AddClub />
      </BrowserRouter>
      ,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/form/add');
  });
});
