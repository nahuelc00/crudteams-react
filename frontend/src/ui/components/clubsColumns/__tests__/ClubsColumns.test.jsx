import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClubsColumns } from '../ClubsColumns';

describe('ClubsColumns component', () => {
  test('Should render component and display correct information', () => {
    render(
      <ClubsColumns />,
    );

    expect(screen.getByText('Teams')).toBeInTheDocument();
    expect(screen.getByText('Countries')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
});
