import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClubsCounter } from '../ClubsCounter';

describe('ClubsCounter component', () => {
  test('Should render component and display clubs quantity', () => {
    render(
      <ClubsCounter clubsQuantity={10} />,
    );

    expect(screen.getByText(10)).toBeInTheDocument();
  });
});
