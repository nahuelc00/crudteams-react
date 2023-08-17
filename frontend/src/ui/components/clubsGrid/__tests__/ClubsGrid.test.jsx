import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClubsGrid } from '../..';

describe('ClubsGrid component', () => {
  test('Should render component and display clubs information', () => {
    const clubsMock = [
      {
        id: 1,
        shortName: 'BAR',
        crestUrl: 'https://barcelonaimage.com',
        nameArea: 'Spain',
      },
      {
        id: 2,
        shortName: 'MCI',
        crestUrl: 'https://manchestercityimage.com',
        nameArea: 'England',
      },
    ];

    const { container } = render(
      <MemoryRouter>
        <ClubsGrid clubs={clubsMock} />
      </MemoryRouter>,
    );

    container.querySelectorAll('.container-shield-name__shield')
      .forEach(($shieldImage, index) => {
        expect($shieldImage.getAttribute('src')).toBe(clubsMock[index].crestUrl);
      });

    expect(screen.getByText(clubsMock[0].nameArea)).toBeInTheDocument();
    expect(screen.getByText(clubsMock[0].shortName)).toBeInTheDocument();

    expect(screen.getByText(clubsMock[1].nameArea)).toBeInTheDocument();
    expect(screen.getByText(clubsMock[1].shortName)).toBeInTheDocument();
  });
});
