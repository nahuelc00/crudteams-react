import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { EditForm } from '../editForm';
import { useHandleUpdateClub } from '../../../hooks/useHandleUpdateClub';

jest.mock('../../../hooks/useHandleUpdateClub');

describe('Form edit page', () => {
  test('Should render edit form', () => {
    useHandleUpdateClub.mockReturnValue({
      viewModal: false,
      upgradeClub: jest.fn(),
    });

    const { container } = render(
      <BrowserRouter>
        <EditForm />
      </BrowserRouter>,
    );

    const $inputs = container.querySelectorAll('input');
    expect($inputs.length).toBe(13);

    const crossCloseHref = container.querySelector('a').getAttribute('href');
    expect(crossCloseHref).toBe('/');

    expect(container.querySelector('button')).toBeInTheDocument();
  });
});
