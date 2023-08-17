import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ClubForm } from '../ClubForm';

describe('ClubForm component', () => {
  test('Should render component and save club when form is valid', async () => {
    const handleSaveClubMock = jest.fn();
    const { container } = render(<ClubForm handleSaveClub={handleSaveClubMock} />);

    let $inputFile;

    container.querySelectorAll('input').forEach(($input) => {
      if ($input.type !== 'file') {
        fireEvent.change($input, { target: { value: $input.placeholder } });
      } else {
        $inputFile = $input;
      }
    });

    const fileMock = new File([], 'barcelona.png', { type: 'image/png' });

    await userEvent.upload($inputFile, fileMock);

    const $saveButton = screen.getByRole('button');

    fireEvent.click($saveButton);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(handleSaveClubMock).toHaveBeenCalledTimes(1);
  });

  test('Should render component and not save club when form is invalid', async () => {
    const handleSaveClubMock = jest.fn();
    const { container } = render(<ClubForm handleSaveClub={handleSaveClubMock} />);

    container.querySelectorAll('input').forEach(($input) => {
      if ($input.type !== 'file') {
        fireEvent.change($input, { target: { value: $input.placeholder } });
      }
    });

    const $saveButton = container.querySelector('button');

    fireEvent.click($saveButton);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(handleSaveClubMock).toHaveBeenCalledTimes(0);
  });
});
