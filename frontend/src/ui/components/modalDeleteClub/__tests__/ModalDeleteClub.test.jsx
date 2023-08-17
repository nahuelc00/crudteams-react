import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalDeleteClub } from '../ModalDeleteClub';

describe('ModalDeleteClub component', () => {
  test('Should render component and close and confirmate modal correctly', () => {
    const handleCloseModalMock = jest.fn();
    const handleConfirmationModalMock = jest.fn();

    render(
      <ModalDeleteClub
        handleCloseModal={handleCloseModalMock}
        handleConfirmationModal={handleConfirmationModalMock}
      />,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();

    const $buttons = screen.getAllByRole('button');
    $buttons.forEach(($button) => {
      if ($button.textContent === 'Close') {
        fireEvent.click($button);
        expect(handleCloseModalMock).toHaveBeenCalledTimes(1);
      }

      if ($button.textContent === 'Delete club') {
        fireEvent.click($button);
        expect(handleConfirmationModalMock).toHaveBeenCalledTimes(1);
      }
    });
  });
});
