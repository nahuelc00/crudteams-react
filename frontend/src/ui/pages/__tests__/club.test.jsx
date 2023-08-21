import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Club } from '../club';
import { useGetClub } from '../../../hooks/useGetClub';

jest.mock('../../../hooks/useGetClub');

describe('Club page', () => {
  test('Should render a club page', () => {
    const clubMock = {
      id: 1,
      name: 'Football Club Barcelona',
      shortName: 'Barcelona',
      tla: 'BAR',
      nameArea: 'Spain',
      idArea: 2224,
      crestUrl: 'https://crudteams-react-production.up.railway.app/files/1d4e90705d5a75ccd876e5a6745ce84b',
      address: "C/ d'Arístides Maillol, 12, 08028 Barcelona, España",
      phone: '902189900',
      website: 'https://www.fcbarcelona.es',
      email: 'oab@fcbarcelona.cat',
      founded: 1899,
      clubColors: 'Red / Blue',
      venue: 'Camp Nou',
      createdAt: '2023-08-21 13:18:52',
    };

    useGetClub.mockReturnValue({
      club: clubMock,
      isLoading: false,
    });

    const { container } = render(
      <BrowserRouter>
        <Club />
      </BrowserRouter>,
    );

    const urlImg = container.querySelector('.club-page__shield-img').getAttribute('src');
    const title = container.querySelector('h1').textContent;

    expect(urlImg).toBe(clubMock.crestUrl);
    expect(title).toBe(clubMock.shortName);

    const $rows = container.querySelectorAll('.row');
    const valuesDataClub = [];

    $rows.forEach(($row) => {
      const rowTextValue = $row.querySelector('.col').children.item(1).textContent;
      valuesDataClub.push(rowTextValue);
    });

    expect(valuesDataClub[0]).toBe(clubMock.nameArea);
    expect(Number(valuesDataClub[1])).toBe(clubMock.idArea);
    expect(valuesDataClub[2]).toBe(clubMock.name);
    expect(valuesDataClub[3]).toBe(clubMock.tla);
    expect(valuesDataClub[4]).toBe(clubMock.phone);
    expect(valuesDataClub[5]).toBe(clubMock.website);
    expect(valuesDataClub[6]).toBe(clubMock.email);
    expect(Number(valuesDataClub[7])).toBe(clubMock.founded);
    expect(valuesDataClub[8]).toBe(clubMock.clubColors);
    expect(valuesDataClub[9]).toBe(clubMock.venue);
    expect(valuesDataClub[10]).toBe(clubMock.createdAt);

    const address = container.querySelector('.club-page__address').textContent;
    expect(address).toBe(clubMock.address);

    const linkEditHref = container.querySelector('.club-page__edit-club').getAttribute('href');
    const linkDeleteHref = container.querySelector('.club-page__delete-club').getAttribute('href');

    expect(linkEditHref).toBe(`/form/edit/${clubMock.id}`);
    expect(linkDeleteHref).toBe(`/club/delete/${clubMock.id}`);

    screen.debug();
  });
});
