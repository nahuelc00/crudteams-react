import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClubRowInfo } from '../ClubRowInfo';

describe('ClubRowInfo component', () => {
  test('Should render component and display correct information', () => {
    render(
      <ClubRowInfo
        description="mock description"
        value="mock value"
      />,
    );

    expect(screen.getByText('mock description')).toBeInTheDocument();
    expect(screen.getByText('mock value')).toBeInTheDocument();
  });
});
