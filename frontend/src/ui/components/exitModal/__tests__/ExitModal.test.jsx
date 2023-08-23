import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ExitModal } from '../ExitModal';

describe('ModalSavedClub component', () => {
  test('Should render component', () => {
    render(
      <MemoryRouter>
        <ExitModal
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
