import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ModalSavedClub } from '../ModalSavedClub';

describe('ModalSavedClub component', () => {
  test('Should render component', () => {
    render(
      <MemoryRouter>
        <ModalSavedClub
          title="title mock"
          description="description mock"
          exitRoute="/exit"
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('title mock')).toBeInTheDocument();
    expect(screen.getByText('description mock')).toBeInTheDocument();
  });
});
