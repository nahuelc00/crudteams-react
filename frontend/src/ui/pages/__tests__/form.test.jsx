import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Form } from '../form';
import { useHandleSaveClub } from '../../../hooks/useHandleSaveClub';

jest.mock('../../../hooks/useHandleSaveClub');

describe('Form add club page', () => {
  test('Should render form', () => {
    useHandleSaveClub.mockReturnValue({
      viewModal: false,
      saveClub: jest.fn(),
    });

    const { container } = render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>,
    );

    const crossCloseHref = container.querySelector('a').getAttribute('href');
    expect(crossCloseHref).toBe('/');

    const $inputs = container.querySelectorAll('input');
    expect($inputs.length).toBe(13);

    expect(container.querySelector('button')).toBeInTheDocument();
  });
});
