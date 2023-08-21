/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Root } from '../root';
import { useFetchClubs } from '../../../hooks/useFetchClubs';

jest.mock('../../../hooks/useFetchClubs');

describe('Root page', () => {
  test('Should render root page with clubs data correct', () => {
    const clubsMock = [
      {
        id: 1,
        shortName: 'Barcelona',
        crestUrl: 'https://barcaimage.com',
        nameArea: 'Spain',
      },
      {
        id: 2,
        shortName: 'Madrid',
        crestUrl: 'https://madridimage.com',
        nameArea: 'Spain',
      },
    ];

    useFetchClubs.mockReturnValue({
      clubs: clubsMock,
      isLoading: false,
    });

    const { container } = render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
    );

    const clubsQuantityText = container.querySelector('.clubs-counter').textContent;
    const addClubLinkHref = container.querySelector('.add-club').getAttribute('href');

    expect(clubsQuantityText).toBe('There are 2 clubs');
    expect(addClubLinkHref).toBe('/form/add');

    const $clubs = container.querySelectorAll('.club');

    $clubs.forEach(($club, index) => {
      const nameClub = $club.querySelector('.container-shield-name__name').textContent;
      const countryClub = $club.querySelector('.club__country').textContent;
      const urlImageClub = $club.querySelector('.container-shield-name__shield').getAttribute('src');

      const $actionsLinks = $club.querySelector('.actions').querySelectorAll('a');
      const hrefLinkSee = $actionsLinks[0].getAttribute('href');
      const hrefLinkEdit = $actionsLinks[1].getAttribute('href');
      const hrefLinkDelete = $actionsLinks[2].getAttribute('href');

      expect(nameClub).toBe(clubsMock[index].shortName);
      expect(countryClub).toBe(clubsMock[index].nameArea);
      expect(urlImageClub).toBe(clubsMock[index].crestUrl);

      expect(hrefLinkSee).toBe(`/club/${clubsMock[index].id}`);
      expect(hrefLinkEdit).toBe(`/form/edit/${clubsMock[index].id}`);
      expect(hrefLinkDelete).toBe(`/club/delete/${clubsMock[index].id}`);
    });
  });
});
