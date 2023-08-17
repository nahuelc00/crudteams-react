import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader component', () => {
  test('Should render component', () => {
    render(<Loader />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
